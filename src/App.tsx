import { useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES, setLanguage } from './i18n'
import { toPng } from 'html-to-image'
import { analyze, parseDnaFile, type AnalysisSummary } from './lib/dna'
import { TraitCard } from './components/TraitCard'
import { ShareCard } from './components/ShareCard'

const CATEGORY_ORDER = ['taste', 'body', 'fitness', 'senses', 'mind', 'appearance', 'sleep']
const MAX_FILE_BYTES = 80 * 1024 * 1024 // reject absurdly large files before we read them

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
          <stop stopColor="#edb24a" />
          <stop offset="1" stopColor="#46c6c0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const SEQ = 'ACGTTAGCACGTTGCAATCGGATCCGTAACGTAGCTTAGCCGATACGGTTACAGATCAGTCCGTAAGC'

/** Streaming base-pair readout — the app's signature "sequencer" texture. */
function ReadoutBand() {
  const chars = (SEQ + SEQ).split('')
  return (
    <div className="readout" aria-hidden="true">
      <div className="readout__bases">
        {chars.map((c, i) => (
          <span key={i} className={`b-${c.toLowerCase()}`}>
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const { t, i18n } = useTranslation()
  const [summary, setSummary] = useState<AnalysisSummary | null>(null)
  const [status, setStatus] = useState<'idle' | 'reading' | 'error'>('idle')
  const [dragOver, setDragOver] = useState(false)
  const [saving, setSaving] = useState(false)
  const [shareError, setShareError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const shareRef = useRef<HTMLDivElement>(null)

  const saveImage = async () => {
    const node = shareRef.current
    if (!node) return
    setSaving(true)
    setShareError(false)
    try {
      // html-to-image's first pass can render blank in some engines; warm up, then keep the second.
      await toPng(node, { pixelRatio: 2, cacheBust: true })
      const dataUrl = await toPng(node, { pixelRatio: 2, cacheBust: true })
      const link = document.createElement('a')
      link.download = 'genoscope-my-dna-traits.png'
      link.href = dataUrl
      link.click()
    } catch {
      setShareError(true)
      window.setTimeout(() => setShareError(false), 4000)
    } finally {
      setSaving(false)
    }
  }

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
    if (file.size > MAX_FILE_BYTES) {
      setStatus('error')
      return
    }
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

  const hasTraits = !!summary && summary.matched.length > 0

  return (
    <div className="mx-auto flex min-h-svh max-w-5xl flex-col px-5 pb-16">
      {/* Header */}
      <header className="flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <HelixMark className="h-7 w-7" />
          <span className="font-mono text-lg font-semibold tracking-tight">
            {t('appName')}
            <span className="readout__cursor ms-0.5" />
          </span>
        </div>
        <select
          aria-label="Language"
          value={i18n.language}
          onChange={(e) => setLanguage(e.target.value)}
          className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-ink)] outline-none hover:border-amber-400/40 focus-visible:border-amber-400/60"
        >
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>
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
            <div className="flex items-center gap-2">
              {hasTraits && (
                <button
                  onClick={saveImage}
                  disabled={saving}
                  className="rounded-full bg-amber-400 hover:bg-amber-300 px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.03] disabled:opacity-60"
                >
                  {saving ? '…' : t('report.share')}
                </button>
              )}
              <button
                onClick={reset}
                className="rounded-full border border-[var(--color-line)] px-4 py-2 text-sm text-[var(--color-ink-dim)] transition-colors hover:border-amber-400/40 hover:text-[var(--color-ink)]"
              >
                {t('report.restart')}
              </button>
            </div>
          </div>

          {shareError && (
            <p role="alert" className="mb-4 text-center text-sm text-rose-300">
              {t('report.shareError')}
            </p>
          )}

          {hasTraits ? (
            <>
              {/* Off-screen card used for PNG export */}
              <div aria-hidden style={{ position: 'fixed', left: -99999, top: 0, pointerEvents: 'none' }}>
                <ShareCard ref={shareRef} matches={summary.matched} />
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
            </>
          ) : (
            <div className="animate-float-in mx-auto max-w-lg rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/50 p-8 text-center">
              <HelixMark className="mx-auto h-10 w-10" />
              <p className="mt-4 text-[var(--color-ink)]">{t('report.emptyTitle')}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{t('report.emptyBody')}</p>
            </div>
          )}

          <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-[var(--color-ink-dim)]/80">
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
          <p className="animate-float-in mt-4 max-w-xl font-serif text-lg leading-relaxed text-[var(--color-ink-dim)]">
            {t('hero.sub')}
          </p>

          <div className="animate-float-in -mx-5 mt-8 w-screen max-w-[100vw] self-center sm:mx-0 sm:w-full">
            <ReadoutBand />
          </div>

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
                ? 'border-amber-400/70 bg-amber-400/5'
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
                    className="rounded-full bg-amber-400 hover:bg-amber-300 px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
                  >
                    {t('upload.browse')}
                  </button>
                  <span className="text-sm text-[var(--color-ink-dim)]">{t('upload.or')}</span>
                  <button
                    onClick={loadSample}
                    className="rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm transition-colors hover:border-amber-400/40"
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
                  <p role="alert" className="mt-4 text-sm text-rose-300">
                    {t('error.parse')}
                  </p>
                )}
              </>
            )}
          </div>

          <p className="animate-float-in mt-4 max-w-md text-xs text-[var(--color-ink-dim)]/80">
            {t('upload.formats')}
          </p>
        </main>
      )}

      {/* Footer */}
      <footer className="mt-10 flex flex-col items-center gap-1 text-center text-xs text-[var(--color-ink-dim)]/80">
        <p>{t('footer.madeWith')}</p>
        <a
          href="https://github.com/MalyStern/genoscope"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 hover:text-[var(--color-ink)]"
        >
          {t('footer.openSource')}
        </a>
        <p className="mt-1 max-w-md text-[var(--color-ink-dim)]/60">{t('footer.notAffiliated')}</p>
      </footer>
    </div>
  )
}
