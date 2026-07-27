<div align="center">

<img src="public/favicon.svg" width="72" height="72" alt="Genoscope" />

# Genoscope

### Your DNA, decoded on your device.

Upload your raw **23andMe** or **AncestryDNA** file and see the traits hiding in your genome. Everything runs in your browser tab. Your DNA file is never uploaded, because there is no server to upload it to.

[**▶ Try it live**](https://malystern.github.io/genoscope/) · [Report a bug](https://github.com/MalyStern/genoscope/issues) · [Suggest a trait](https://github.com/MalyStern/genoscope/issues)

![License: MIT](https://img.shields.io/badge/license-MIT-a3e635)
![Privacy: 100% local](https://img.shields.io/badge/privacy-100%25%20local-a3e635)
![No backend](https://img.shields.io/badge/backend-none-65a30d)
![Languages: 12](https://img.shields.io/badge/languages-12-65a30d)

</div>

---

## Why this exists

In 2025, 23andMe filed for bankruptcy and roughly 15 million people were suddenly told to delete their genetic data before it could be sold to a buyer. If you exported your raw file first, you now have a `.txt` sitting in your Downloads folder and nowhere safe to open it.

Every other "read your raw DNA" tool asks you to upload that file to their cloud. That is the one thing you should never do with your genome. So Genoscope does not have a cloud. The whole app is a static page: you pick your file, it gets read in your browser, and the report appears. Nothing is sent anywhere.

Don't take my word for it. Open your browser's DevTools, go to the Network tab, and drop your file in. You'll see zero requests. You can also turn off Wi-Fi first and it works exactly the same.

## What you get

Genoscope reads your file and decodes 22 well-studied, non-medical traits, grouped by category:

**Taste** — caffeine metabolism, cilantro-tastes-like-soap, bitter (PTC) taster, sweet tooth.
**Body** — lactose tolerance, alcohol flush (ALDH2), alcohol metabolism speed (ADH1B), earwax type, caffeine jitters, norovirus resistance.
**Fitness** — sprinter vs endurance muscle (ACTN3).
**Senses** — asparagus smell, sun-sneezing, smell of violets.
**Mind** — "Warrior vs Worrier" (COMT), empathy tendency (OXTR), memory & learning (BDNF).
**Appearance** — eye color, blond-hair likelihood, freckles & red hair.
**Sleep** — morning lark vs night owl, sleep depth.

Every card links to its [SNPedia](https://www.snpedia.com/) page so you can read the science yourself.

## Features

- **Truly private.** Pure client-side. Verifiable in your Network tab.
- **12 languages, including right-to-left.** English, Spanish, Portuguese, French, German, Chinese, Hindi, Japanese, Russian, Hebrew, Arabic, and Persian. It picks your browser language automatically and remembers your choice.
- **Reads the common formats.** 23andMe, AncestryDNA, and MyHeritage raw exports. It matches genotypes across DNA strands, so a file reported on the opposite strand still works.
- **Works offline.** It's a static site. Load it once and you can pull the plug.
- **Shareable.** Save your traits as an image to post, without leaking your actual DNA.
- **Free and open source**, MIT licensed.

## Just want to look?

Click **"Try with sample data"** to run a synthetic demo genome. No file required.

## How to get your raw DNA file

You don't need to buy a new test. If you already tested with one of these, download the raw data you already paid for:

- **23andMe:** Profile → Settings → scroll to *23andMe Data* → *Download* → request the *Raw data* file.
- **AncestryDNA:** Settings (gear) on your DNA results → *Download DNA Data*.
- **MyHeritage:** DNA → *Manage DNA kits* → the three-dot menu → *Download*.

The download is a small `.txt` (or a `.zip` containing one). Unzip it if needed, then drop the `.txt` into Genoscope.

## Run it locally

```bash
git clone https://github.com/MalyStern/genoscope
cd genoscope
npm install
npm run dev
```

Open the `localhost` URL it prints. To build a static bundle you can host anywhere:

```bash
npm run build      # output goes to dist/
npm run preview    # serve the built bundle locally
```

The project is Vite + React + TypeScript + Tailwind. There is no backend to configure because there is no backend.

## How it works

1. The browser's `File` API reads your file into memory, inside your tab.
2. `parseDnaFile` ([`src/lib/dna.ts`](src/lib/dna.ts)) turns the raw export into a `rsID → genotype` map.
3. Each trait in [`src/data/traits.ts`](src/data/traits.ts) maps genotypes (strand-aware) to a plain-language result.
4. React renders the report. No network calls happen at any point.

## Contributing

Two easy ways to help, both very welcome:

- **Add a trait.** It's a single object in [`src/data/traits.ts`](src/data/traits.ts): a gene, an rsID, a genotype→result mapping, and a SNPedia link. Please avoid disease/medical markers and prefer non-palindromic SNPs (alleles that aren't A/T or C/G) so strand direction stays unambiguous.
- **Improve a translation.** All UI strings live in [`src/i18n.ts`](src/i18n.ts). The non-English strings were a first pass and would benefit from native speakers. Trait descriptions are English-only for now, so translating those is a great contribution too.

## Disclaimer

Genoscope is a hobby project for curiosity and education. It is not a medical device and gives no medical, diagnostic, or health advice. Genetics is complicated and a single marker rarely tells the whole story. For anything about your health, talk to a qualified professional. Trait interpretations are simplified and can be wrong for your particular ancestry.

Genoscope is not affiliated with, or endorsed by, 23andMe or AncestryDNA. Those names are trademarks of their respective owners and are used only to describe the file formats the tool can read.

## License

[MIT](LICENSE) © Genoscope contributors. Trait references come from the community-maintained [SNPedia](https://www.snpedia.com/).
