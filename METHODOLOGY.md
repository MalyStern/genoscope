# Methodology

How Genoscope chooses and presents traits, and where it deliberately stays conservative. Genoscope is a curiosity/education tool, not a medical or diagnostic one.

## What a "trait" here is

Each trait maps one or a few well-known SNPs (single-nucleotide positions) to a plain-language result. These are **statistical associations reported in the literature**, not deterministic outcomes. A variant nudges a probability; it does not decide anything. Ancestry, environment, and many other genes matter, usually more.

## How markers are chosen

A trait is included only if:

- it uses common SNPs that are present on consumer chips (23andMe / AncestryDNA / MyHeritage),
- the genotype→phenotype association is well documented (e.g. on [SNPedia](https://www.snpedia.com/) with primary references),
- it is **non-medical** (we avoid disease-risk markers), and
- it is **not strand-ambiguous** — we exclude palindromic SNPs (A/T or C/G), because their strand can't be resolved from a raw file alone, which could otherwise produce a confidently wrong result.

## How results are presented

- Descriptions are written as associations ("linked to", "associated with"), and every card carries a caveat that this is an association, not a verdict.
- Each card links to its SNPedia page so you can read the science yourself.
- The "Mind"-style behavioral traits (e.g. COMT, OXTR) are the least certain; they are framed cautiously and are the first candidates for removal if challenged.

## Known limitations

- **Single-marker simplification.** Real traits are usually polygenic; one SNP is a rough proxy.
- **Ancestry.** Many associations were studied in specific populations and may not transfer to yours.
- **No effect sizes yet.** Cards don't yet show study size / effect size / evidence grade. Adding a structured evidence level (strong / moderate / limited) with PubMed and GWAS Catalog links per trait is planned — contributions welcome.
- **Raw-data caveats.** Consumer raw data is not clinically validated; providers themselves say it should not be used for medical decisions.

## When a trait is changed or removed

If a mapping is shown to be wrong, based on a superseded study, or too deterministic, open an issue. Traits that can't be stated conservatively and accurately are removed rather than kept. Contributions must avoid disease/medical markers and palindromic SNPs (see [CONTRIBUTING](README.md#contributing) / the note in `src/data/traits.ts`).

## Sources

Trait references currently point to the community-maintained [SNPedia](https://www.snpedia.com/). A future step is to add, per trait, a primary reference (PubMed/DOI) and a [GWAS Catalog](https://www.ebi.ac.uk/gwas/) entry where applicable, with the studied ancestry and sample size.
