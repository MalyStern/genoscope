import { useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n, { LANGUAGES, applyDir } from './i18n'
import { analyze, parseDnaFile, type AnalysisSummary } from './lib/dna'
import { TraitCard } from './components/TraitCard'

const CATEGORY_ORDER = ['taste', 'body', 'fitness', 'senses', 'mind', 'appearance', 'sleep']

function HelixMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 3c0 5 10 5 10 10S7 18 7 21M17 3c0 5-10 5-10 10s10 5 10 8"
        stroke="url(#g)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8.5 6h7M9 9h6M9 15h6M8.5 18h7"
        stroke="url(#g)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="g" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a855f7" />
          <stop offset="1" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function App() {
  const { t } = useTranslation()
  const [summary, setSummary] = useState<AnalysisSummary | null>(null)
  const [status, setStatus] = useState<'idle' | 'reading' | 'error'>('idle')
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const run = useCallback((text: string) => {
    setStatus('reading')
    // Small delay so the "reading your genome" state is perceptible on tiny files.
    window.setTimeout(() => {
      const genome = parseDnaFile(text)
      if (genome.size === 0) {
        setStatus('error')
        return
      }
      setSummary(analyze(genome))
      setStatus('idle')
    }, 550)
  }, [])

  const onFiles = (files: FileList | null) => {
    const file = files?.[0]
    if (!file) return
    file.text().then(run).catch(() => setStatus('error'))
  }

  const loadSample = () => {
    fetch(import.meta.env.BASE_URL + 'sample-dna.txt')
      .then((r) => r.text())
      .then(run)
      .catch(() => setStatus('error'))
  }

  const reset = () => {
    setSummary(null)
    setStatus('idle')
    if (inputRef.current) inputRef.current.value = ''
  }

  const changeLang = (code: string) => {
    i18n.changeLanguage(code)
    applyDir(code)
  }

  return (
    <div className="mx-auto flex min-h-svh max-w-5xl flex-col px-5 pb-16">
      {/* Header */}
      <header className="flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <HelixMark className="h-7 w-7" />
          <span className="text-lg font-semibold tracking-tight">{t('appName')}</span>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/60 p-0.5 text-sm">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => changeLang(l.code)}
              className={`rounded-full px-3 py-1 transition-colors ${
                i18n.language === l.code
                  ? 'bg-[var(--color-surface-2)] text-[var(--color-ink)]'
                  : 'text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </header>

      {summary ? (
        /* ---------- Report ---------- */
        <main className="flex-1">
          <div className="animate-float-in flex flex-col items-center gap-3 py-6 text-center sm:flex-row sm:justify-between sm:text-start">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t('report.title')}
              </h1>
              <p className="mt-1 text-sm text-[var(--color-ink-dim)]">
                {t('report.stats', {
                  variants: summary.totalVariants.toLocaleString(),
                  matched: summary.matched.length,
                })}
              </p>
            </div>
            <button
              onClick={reset}
              className="rounded-full border border-[var(--color-line)] px-4 py-2 text-sm text-[var(--color-ink-dim)] transition-colors hover:border-violet-400/40 hover:text-[var(--color-ink)]"
            >
              {t('report.restart')}
            </button>
          </div>

          {CATEGORY_ORDER.map((cat) => {
            const items = summary.matched.filter((m) => m.trait.category === cat)
            if (items.length === 0) return null
            return (
              <section key={cat} className="mt-8">
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-dim)]">
                  {t(`categories.${cat}`)}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((m, i) => (
                    <TraitCard key={m.trait.id} match={m} index={i} />
                  ))}
                </div>
              </section>
            )
          })}

          <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-[var(--color-ink-dim)]/70">
            {t('disclaimer')}
          </p>
        </main>
      ) : (
        /* ---------- Landing / upload ---------- */
        <main className="flex flex-1 flex-col items-center justify-center py-10 text-center">
          <div className="animate-float-in mb-6 flex flex-wrap justify-center gap-2 text-xs">
            {(['private', 'offline', 'free'] as const).map((b) => (
              <span
                key={b}
                className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/60 px-3 py-1 text-[var(--color-ink-dim)]"
              >
                {t(`badges.${b}`)}
              </span>
            ))}
          </div>

          <h1 className="animate-float-in max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {t('tagline')}
          </h1>
          <p className="animate-float-in mt-4 max-w-xl text-[var(--color-ink-dim)]">{t('hero.sub')}</p>

          {/* Dropzone */}
          <div
            onDragOver={(e) => {
              e.preventDefault()
              setDragOver(true)
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragOver(false)
              onFiles(e.dataTransfer.files)
            }}
            className={`animate-float-in mt-8 w-full max-w-xl rounded-3xl border-2 border-dashed p-8 transition-colors ${
              dragOver
                ? 'border-violet-400/70 bg-violet-500/5'
                : 'border-[var(--color-line)] bg-[var(--color-surface)]/40'
            }`}
          >
            {status === 'reading' ? (
              <div className="flex flex-col items-center gap-3 py-4">
                <HelixMark className="h-10 w-10 animate-pulse" />
                <p className="text-[var(--color-ink-dim)]">{t('analyzing')}</p>
              </div>
            ) : (
              <>
                <HelixMark className="mx-auto h-10 w-10" />
                <p className="mt-3 font-medium">{t('upload.drop')}</p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => inputRef.current?.click()}
                    className="rounded-full bg-gradient-to-r from-violet-500 to-teal-400 px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
                  >
                    {t('upload.browse')}
                  </button>
                  <span className="text-sm text-[var(--color-ink-dim)]">{t('upload.or')}</span>
                  <button
                    onClick={loadSample}
                    className="rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm transition-colors hover:border-violet-400/40"
                  >
                    {t('upload.sample')}
                  </button>
                </div>
                <input
                  ref={inputRef}
                  type="file"
                  accept=".txt,.csv,.tsv"
                  className="hidden"
                  onChange={(e) => onFiles(e.target.files)}
                />
                {status === 'error' && (
                  <p className="mt-4 text-sm text-rose-300">{t('error.parse')}</p>
                )}
              </>
            )}
          </div>

          <p className="animate-float-in mt-4 max-w-md text-xs text-[var(--color-ink-dim)]/70">
            {t('upload.formats')}
          </p>
        </main>
      )}

      {/* Footer */}
      <footer className="mt-10 flex flex-col items-center gap-1 text-center text-xs text-[var(--color-ink-dim)]/70">
        <p>{t('footer.madeWith')}</p>
        <a
          href="https://github.com/MalyStern/genoscope"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 hover:text-[var(--color-ink)]"
        >
          {t('footer.openSource')}
        </a>
      </footer>
    </div>
  )
}
