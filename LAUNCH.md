# Launch kit

Ready-to-post copy for launching Genoscope. Post these from your own accounts. Read each community's rules first. Never ask for upvotes.

**The hook:** 23andMe went bankrupt and ~15M people were told to delete their DNA. Genoscope is the opposite of the company that failed them: a trait viewer that runs 100% in your browser and uploads nothing.

**Best window:** Hacker News on a Tue–Thu, 8–11am ET. Product Hunt at 12:01am PT the same week. Stagger the Reddit posts across several days so it doesn't look like a blitz.

---

## Hacker News — Show HN

**Title:**
```
Show HN: Genoscope – see your DNA traits 100% in your browser (open source)
```

**First comment (post it yourself, right after submitting):**
> I built this after the 23andMe bankruptcy, when a lot of people exported their raw DNA and then had nowhere safe to open it. Every tool that reads a raw file wants you to upload it to their cloud, which is the one thing you shouldn't do with your genome.
>
> Genoscope has no cloud. It's a static page: you pick your 23andMe/AncestryDNA `.txt`, it's parsed in your browser tab, and the report renders. Open the Network tab and you'll see zero requests. It even works with Wi-Fi off.
>
> It decodes 22 well-studied, non-medical traits (caffeine metabolism, cilantro-soap, lactose, ACTN3 muscle type, etc.), each linking to its SNPedia source. Strand-aware parser, 12 languages incl. RTL. Stack is Vite + React + Tailwind, deployed on GitHub Pages.
>
> It's a hobby project, not a medical tool, and single-marker traits are simplified by nature. Code and trait table are here: https://github.com/MalyStern/genoscope — feedback welcome, especially on the parser and trait mappings.

Then stay in the thread for a few hours and answer every comment like a person.

---

## Reddit

Lead with the problem and the privacy angle, not the product. Put the link in the post body or a comment, and reply to everyone.

### r/genealogy (flair: Tools & Tech)
**Title:** I made a free, no-upload way to view your DNA traits after exporting from 23andMe
> After the 23andMe news I exported my raw data and realized there was no private way to actually look at it. So I made a small open-source page that reads your raw `.txt` entirely in the browser (nothing is uploaded) and shows traits like caffeine metabolism, lactose tolerance, muscle type, etc., each linked to SNPedia. Free, no account. Would love feedback from people who know the trait science better than I do.

### r/privacy and r/degoogle
**Title:** A DNA trait viewer with no backend — your raw file never leaves the browser
> Post-23andMe, people have raw DNA files and only cloud tools to open them. This one has no server at all: parsing happens client-side, Network tab shows zero requests, works offline. Open source, MIT. Curious whether the community can poke holes in the "nothing is uploaded" claim.

### r/selfhosted
**Title:** No server to host: a DNA traits viewer that runs entirely client-side
> Not exactly self-hosted — it's better, there's nothing to host. Static page, no telemetry, no account, works offline, MIT licensed. You can also `npm run build` and serve the `dist/` yourself. Reads 23andMe/AncestryDNA/MyHeritage raw files.

### r/23andme and r/AncestryDNA
**Title:** Exported your raw data? Here's a private way to actually read it
> Frame it as "what to do with your raw data after you download/delete," not as an ad. Same body as above, shorter.

### r/dataisbeautiful (Mondays only, needs [OC])
Don't post the tool. Post a genuinely nice visualization made from a sample genome (e.g., a chromosome ideogram of trait-associated variants), title it plainly, state the data source and that you made it, and mention Genoscope in a comment.

---

## Product Hunt

**Tagline:** See your DNA traits 100% in your browser. Nothing uploaded.
**Description:**
> Genoscope reads your 23andMe or AncestryDNA raw file entirely in your browser and shows 22 well-studied traits, each linked to SNPedia. No account, no upload, no server — verify it in your Network tab. Free, open source, 12 languages. Built after the 23andMe bankruptcy so people can explore their genome without handing it to a company.

Warm up a small follower list beforehand and reply to every comment fast.

---

## X / Twitter

> 23andMe went bankrupt and 15M people were told to delete their DNA.
>
> So I built the opposite: Genoscope reads your raw DNA file and shows your traits — 100% in your browser. Nothing is uploaded. Open the Network tab and check.
>
> Free + open source: https://malystern.github.io/genoscope/

Consider tagging genetic-genealogy folks who cover privacy (e.g. DNAeXplained / The DNA Geek) — a genuine reply, not a spammy @.

---

## Durable backlinks (do these once, they keep sending traffic)

- Open PRs adding Genoscope to: `lissy93/awesome-privacy`, `pluja/awesome-privacy`, `iAnonymous3000/awesome-privacy-tools`, and any awesome-selfhosted / awesome-genealogy lists.
- Suggest it to privacyguides.org / privacytools.io.
- Pitch it to genealogy newsletters (Eastman's Online Genealogy Newsletter, DNAeXplained, Genealogy Gems) with the 23andMe hook.

## The one artifact worth recording

A short screen capture: drag a raw `.txt` in, traits render instantly, with the DevTools Network panel open beside it showing no requests. That single loop proves private + instant + in-browser at once. Put it at the top of the README and attach it to the Show HN and tweets.
