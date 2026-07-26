import { forwardRef } from 'react'
import type { TraitMatch } from '../lib/dna'
import type { Tone } from '../data/traits'

// Self-contained inline styles (hex, not Tailwind utilities) so html-to-image
// captures reliably across browsers.
const TONE_HEX: Record<Tone, string> = {
  violet: '#c084fc',
  teal: '#2dd4bf',
  amber: '#fbbf24',
  rose: '#fb7185',
}

interface Props {
  matches: TraitMatch[]
}

/** The shareable summary card that gets exported to PNG. Rendered off-screen. */
export const ShareCard = forwardRef<HTMLDivElement, Props>(function ShareCard({ matches }, ref) {
  return (
    <div
      ref={ref}
      style={{
        width: 640,
        boxSizing: 'border-box',
        padding: 36,
        fontFamily: "'Inter', system-ui, sans-serif",
        color: '#e8e6f0',
        background:
          'radial-gradient(600px 400px at 12% -10%, rgba(168,85,247,0.35), transparent 60%),' +
          'radial-gradient(500px 400px at 100% 0%, rgba(45,212,191,0.25), transparent 55%),' +
          '#0a0912',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" aria-hidden="true">
          <path
            d="M7 3c0 5 10 5 10 10S7 18 7 21M17 3c0 5-10 5-10 10s10 5 10 8"
            stroke="#a855f7"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M8.5 6h7M9 9h6M9 15h6M8.5 18h7" stroke="#2dd4bf" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>
            My DNA traits
          </div>
          <div style={{ fontSize: 13, color: '#a5a0b8' }}>
            decoded privately with Genoscope
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {matches.slice(0, 16).map((m) => (
          <div
            key={m.trait.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 12px',
              borderRadius: 12,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <span style={{ fontSize: 22, lineHeight: 1 }}>{m.trait.emoji}</span>
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: TONE_HEX[m.outcome.tone],
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {m.outcome.label}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: '#a5a0b8',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {m.trait.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 22,
          paddingTop: 16,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 12,
          color: '#a5a0b8',
        }}
      >
        <span>🔒 My DNA never left my device</span>
        <span style={{ fontFamily: 'monospace' }}>malystern.github.io/genoscope</span>
      </div>
    </div>
  )
})
