import { useTranslation } from 'react-i18next'
import type { TraitMatch } from '../lib/dna'
import type { Tone } from '../data/traits'
import { localizeOutcome, localizeTraitName } from '../data/traitI18n'

const TONE: Record<Tone, { border: string; label: string; chip: string; glow: string }> = {
  violet: {
    border: 'border-sky-400/25 hover:border-sky-400/50',
    label: 'text-sky-300',
    chip: 'bg-sky-500/15 text-sky-200',
    glow: 'before:from-sky-500/20',
  },
  teal: {
    border: 'border-emerald-400/25 hover:border-emerald-400/50',
    label: 'text-emerald-300',
    chip: 'bg-emerald-500/15 text-emerald-200',
    glow: 'before:from-emerald-500/20',
  },
  amber: {
    border: 'border-amber-400/25 hover:border-amber-400/50',
    label: 'text-amber-300',
    chip: 'bg-amber-500/15 text-amber-200',
    glow: 'before:from-amber-500/20',
  },
  rose: {
    border: 'border-rose-400/25 hover:border-rose-400/50',
    label: 'text-rose-300',
    chip: 'bg-rose-500/15 text-rose-200',
    glow: 'before:from-rose-500/20',
  },
}

export function TraitCard({ match, index }: { match: TraitMatch; index: number }) {
  const { t, i18n } = useTranslation()
  const { trait, genotype, outcome } = match
  const tone = TONE[outcome.tone]
  const name = localizeTraitName(trait, i18n.language)
  const { label, desc } = localizeOutcome(trait, outcome, i18n.language)

  return (
    <article
      className={`animate-float-in relative overflow-hidden rounded-2xl border bg-[var(--color-surface)]/70 p-5 text-start backdrop-blur transition-colors before:absolute before:inset-x-0 before:top-0 before:h-24 before:bg-gradient-to-b before:to-transparent before:opacity-70 ${tone.border} ${tone.glow}`}
      style={{ animationDelay: `${Math.min(index * 45, 500)}ms` }}
    >
      <div className="relative flex items-start justify-between gap-3">
        <span className="text-3xl leading-none">{trait.emoji}</span>
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${tone.chip}`}>
          {t(`categories.${trait.category}`)}
        </span>
      </div>

      <h3 className="relative mt-3 text-sm font-medium text-[var(--color-ink-dim)]">{name}</h3>
      <p className={`relative mt-0.5 text-xl font-semibold ${tone.label}`}>{label}</p>
      <p className="relative mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">{desc}</p>
      <p className="relative mt-1.5 text-[11px] italic text-[var(--color-ink-dim)]/60">
        {t('assocNote')}
      </p>

      <div className="relative mt-4 flex items-center justify-between border-t border-[var(--color-line)] pt-3 text-[11px] text-[var(--color-ink-dim)]/70">
        <span className="font-mono">
          {trait.gene} · {genotype}
        </span>
        <a
          href={trait.ref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono underline decoration-dotted underline-offset-2 hover:text-[var(--color-ink)]"
        >
          {trait.rsid}
        </a>
      </div>
    </article>
  )
}
