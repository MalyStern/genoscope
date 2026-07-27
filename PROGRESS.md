# Genoscope — build progress (autonomous /goal loop)

**Goal:** Ship a zero-cost, viral, client-side web app to the user's GitHub (account: `MalyStern`) that earns stars. Work autonomously, low intensity, within a week. User will NOT respond — decide everything.

**Product:** Genoscope — upload your 23andMe / AncestryDNA raw file → beautiful, shareable genetic-traits report. 100% in-browser, nothing uploaded. Fun/interesting traits (not disease risk) → viral + legally safe. Rides the 2025 23andMe-bankruptcy privacy wave. Field is open (top OSS rival ~146 stars).

**Stack:** Vite 8 + React 19 + TS + Tailwind 4 + i18next (EN + HE/RTL). Deploy: GitHub Pages via Actions. `base: '/genoscope/'`.

## Status checklist
- [x] Scaffold Vite react-ts, install deps (tailwind, i18next)
- [x] vite.config (tailwind plugin + base), index.html meta/OG, index.css (theme + ambient bg)
- [x] Traits database (src/data/traits.ts) — 16 traits
- [x] DNA parser + strand-aware matcher + analyzer (src/lib/dna.ts)
- [x] i18n setup (EN/HE) + RTL direction switching
- [x] Sample DNA file for "try it" demo (public/sample-dna.txt)
- [x] UI: hero/upload dropzone, privacy pitch, trait cards grouped by category
- [x] favicon.svg (DNA helix)
- [x] Build passes; verified full flow in browser (34 variants, 16 traits render)
- [x] README (hero, badges, why, features, install), LICENSE (MIT), package.json meta
- [x] GitHub Actions deploy-to-Pages workflow (.github/workflows/deploy.yml)
- [x] git init, commit, create repo on MalyStern, push, enable Pages (Actions source)
- [x] Verify live site loads on Pages — LIVE at https://malystern.github.io/genoscope/
- [x] Share: download report card as PNG (html-to-image) — viral engine (ShareCard.tsx)
- [x] Verified full flow on production build: 16 traits render, EN/HE+RTL works, share card + button present
- [ ] Localize trait content to Hebrew; add more traits (target ~25); add screenshots to README
- [ ] Launch prep: Show HN + r/LocalLLaMA + r/23andme + r/privacy copy

## SHIPPED ✅ + MATURED
Repo: https://github.com/MalyStern/genoscope · Live: https://malystern.github.io/genoscope/

Done in maturity pass:
- 22 strand-safe traits (removed palindromic rs713598/rs11803731; added FUT2, OR5A1,
  KITLG, OXTR, BDNF, ADH1B, ADORA2A). Verified against SNPedia.
- 12 languages w/ auto-detect + persistence + RTL (en, es, pt, fr, de, zh, hi, ja, ru,
  he, ar, fa). Language <select> dropdown. UI translated; trait CONTENT still English.
- QA fixes: strand-ambiguity (critical) resolved by dropping palindromic SNPs; bare-CR
  line endings; haploid single-allele; dup rsID first-wins; file-size guard; empty-result
  state; share warm-up + error surfaced.
- De-AI redesign: dropped violet/teal gradient → single lime accent + faint lab grid,
  mono wordmark, system fonts (removed unused Inter). Human/specific README + hero copy.
- Legal: PRIVACY.md; non-affiliation notice in footer + README; strengthened disclaimer.
- LAUNCH.md: ready-to-post Show HN / Reddit / PH / X copy (user posts; I do NOT auto-post).
- Verified live: 22 cards, 12 langs, Arabic RTL, no console errors.

## NEXT (autonomous loop, low intensity)
- Trait CONTENT localization (names/labels/descs) — currently English only; big win for HE/others.
- More traits toward ~30; rarity ("X% of people") per trait; single-trait share cards.
- Web Worker for parsing large (20MB+) files off main thread (M2).
- Record demo GIF (drag file → traits, Network tab empty) for README + launch.
- a11y polish (emoji aria-labels, contrast on faint text, live region on result).
- Native-review the machine-translated locales (zh/hi/ja/ar/fa) — invite via CONTRIBUTING.
- Broader mandate from user: keep shipping MORE products/features for AI users (2 audiences:
  developers + non-coders), each branded + QA'd + legal-checked + published. Genoscope is
  product #1. Marketing = PREPARE materials; user publishes (accounts are theirs).

## Key decisions / notes
- Traits framed as "for fun / educational, not medical advice." Prominent disclaimer.
- Parser must handle 23andMe (tab, 4-col), AncestryDNA (tab, 5-col), MyHeritage/FTDNA (comma, quoted). Strand-aware genotype matching (try complement).
- Trait content is English in data for MVP; localize to Hebrew in a later loop pass. UI chrome fully EN/HE + RTL from day one.
- Never fabricate that the repo is pushed/live — verify with gh before claiming.
