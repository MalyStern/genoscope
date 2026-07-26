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
- [ ] git init, commit, create repo on MalyStern, push, enable Pages (Actions source)
- [ ] Verify live site loads on Pages
- [ ] Share: download report card as PNG (html-to-image) — viral engine, NEXT
- [ ] Localize trait content to Hebrew; add more traits; add screenshots to README
- [ ] Launch prep: repo topics/description via gh, Show HN + r/LocalLLaMA + r/23andme copy

## Key decisions / notes
- Traits framed as "for fun / educational, not medical advice." Prominent disclaimer.
- Parser must handle 23andMe (tab, 4-col), AncestryDNA (tab, 5-col), MyHeritage/FTDNA (comma, quoted). Strand-aware genotype matching (try complement).
- Trait content is English in data for MVP; localize to Hebrew in a later loop pass. UI chrome fully EN/HE + RTL from day one.
- Never fabricate that the repo is pushed/live — verify with gh before claiming.
