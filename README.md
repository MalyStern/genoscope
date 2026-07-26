<div align="center">

<img src="public/favicon.svg" width="72" height="72" alt="Genoscope" />

# Genoscope

### Your DNA, decoded on your device.

Turn your **23andMe / AncestryDNA** raw data into a beautiful genetic-traits report — **100% in your browser**. Your DNA file never leaves your device. No account, no upload, no tracking.

[**▶ Try it live**](https://malystern.github.io/genoscope/) · [Report a bug](https://github.com/MalyStern/genoscope/issues) · [Suggest a trait](https://github.com/MalyStern/genoscope/issues)

![License: MIT](https://img.shields.io/badge/license-MIT-a855f7)
![Privacy: 100% local](https://img.shields.io/badge/privacy-100%25%20local-2dd4bf)
![No backend](https://img.shields.io/badge/backend-none-14b8a6)

</div>

---

## Why

23andMe filed for bankruptcy in 2025 and millions of people were told to **delete their genetic data**. Meanwhile, every other tool that "reads your raw DNA" wants you to *upload the most personal file you own* to their cloud.

**Genoscope does the opposite.** You drop your raw DNA file into a web page and everything — parsing, matching, the whole report — happens **locally in your browser tab**. There is no server. Close the tab and it's gone. You can even turn off your Wi-Fi first and it still works.

## What you get

Upload your file and Genoscope decodes fun, well-studied genetic traits, grouped into a clean report:

☕ Caffeine metabolism · 🌿 Cilantro-tastes-like-soap · 😖 Bitter (super)taster · 🥛 Lactose tolerance · 🍷 Alcohol flush · 👂 Earwax type · 💪 Sprinter vs endurance muscle · 👁️ Eye color · 🌙 Morning lark vs night owl · 🌱 Asparagus smell · 🧠 "Warrior vs Worrier" · 🤧 Sun-sneezing · 💇 Hair texture · 🍬 Sweet tooth · 🧑‍🦰 Freckles & red hair · 😴 Sleep depth

Every card links to its **[SNPedia](https://www.snpedia.com/)** source so you can dig deeper.

## Features

- 🔒 **Truly private** — pure client-side. Your genome is never sent anywhere.
- 🌍 **Multilingual + RTL** — ships with English and Hebrew (full right-to-left support), easy to add more.
- 🧬 **Format-flexible** — reads 23andMe, AncestryDNA and MyHeritage exports, and matches across DNA strands automatically.
- ⚡ **Instant & offline** — a static site; works with no internet once loaded.
- 🎨 **Beautiful & responsive** — dark, modern UI that looks great on phone and desktop.
- 🆓 **Free & open source** — MIT licensed.

## Try it without your own data

Click **"Try with sample data"** on the site to run a synthetic demo genome — no file needed.

## Run locally

```bash
git clone https://github.com/MalyStern/genoscope
cd genoscope
npm install
npm run dev
```

Then open the printed `localhost` URL. Build a static bundle with `npm run build` (output in `dist/`).

## How it works

1. Your file is read with the browser's `File` API — it stays in memory, in your tab.
2. `parseDnaFile` turns the raw export into a map of `rsID → genotype`.
3. Each trait in [`src/data/traits.ts`](src/data/traits.ts) maps genotypes (strand-aware) to a friendly result.
4. React renders the report. Nothing is ever transmitted.

Want to add a trait? It's just one entry in `src/data/traits.ts` — PRs welcome.

## ⚠️ Disclaimer

Genoscope is for **curiosity and education only**. It is **not** a medical device and does **not** provide medical, diagnostic, or health advice. Genetics is complex and a single marker rarely tells the whole story. For anything health-related, talk to a qualified professional.

## License

[MIT](LICENSE) © Genoscope contributors. Trait references come from the community-maintained [SNPedia](https://www.snpedia.com/).
