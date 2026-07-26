// Client-side DNA parsing + trait analysis. Everything here runs in the browser;
// no genome data ever leaves the device.

import { TRAITS, type Trait, type TraitOutcome } from '../data/traits'

export type Genome = Map<string, string>

const COMPLEMENT: Record<string, string> = { A: 'T', T: 'A', C: 'G', G: 'C' }

/** Uppercase, keep only ACGT, and sort the two alleles so order never matters. */
function normalizeGenotype(raw: string): string | null {
  const g = raw.trim().toUpperCase().replace(/[^ACGT]/g, '')
  if (g.length !== 2) return null
  return [g[0], g[1]].sort().join('')
}

/** The same genotype read from the opposite DNA strand. */
function complement(genotype: string): string {
  return genotype
    .split('')
    .map((b) => COMPLEMENT[b] ?? b)
    .sort()
    .join('')
}

/**
 * Parse a raw DNA export. Supports the three common consumer formats:
 *  - 23andMe:      rsid  chromosome  position  genotype           (tab, comments start with #)
 *  - AncestryDNA:  rsid  chromosome  position  allele1  allele2   (tab, header row)
 *  - MyHeritage/FTDNA: "RSID","CHROMOSOME","POSITION","RESULT"    (comma, quoted)
 */
export function parseDnaFile(text: string): Genome {
  const genome: Genome = new Map()
  const lines = text.split(/\r?\n/)
  for (const line of lines) {
    if (!line || line[0] === '#') continue
    const delim = line.includes('\t') ? '\t' : ','
    const parts = line.split(delim).map((p) => p.replace(/^"|"$/g, '').trim())
    if (parts.length < 4) continue

    const rsid = parts[0].toLowerCase()
    if (rsid === 'rsid') continue // header row
    if (!rsid.startsWith('rs') && !rsid.startsWith('i')) continue

    const genotype =
      parts.length >= 5
        ? normalizeGenotype(parts[3] + parts[4]) // AncestryDNA split alleles
        : normalizeGenotype(parts[3]) // combined genotype column

    if (genotype) genome.set(rsid, genotype)
  }
  return genome
}

export interface TraitMatch {
  trait: Trait
  genotype: string
  outcome: TraitOutcome
}

export interface AnalysisSummary {
  totalVariants: number
  matched: TraitMatch[]
  unmatchedTraits: Trait[]
}

export function analyze(genome: Genome): AnalysisSummary {
  const matched: TraitMatch[] = []
  const unmatchedTraits: Trait[] = []

  for (const trait of TRAITS) {
    const observed = genome.get(trait.rsid.toLowerCase())
    if (!observed) {
      unmatchedTraits.push(trait)
      continue
    }

    let outcomeKey: string | undefined
    for (const candidate of [observed, complement(observed)]) {
      if (trait.genotypes[candidate]) {
        outcomeKey = trait.genotypes[candidate]
        break
      }
    }

    if (!outcomeKey) {
      unmatchedTraits.push(trait)
      continue
    }

    matched.push({ trait, genotype: observed, outcome: trait.outcomes[outcomeKey] })
  }

  return { totalVariants: genome.size, matched, unmatchedTraits }
}
