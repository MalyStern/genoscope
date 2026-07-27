# Privacy

Short version: **Genoscope collects nothing, stores nothing on any server, and sends your DNA nowhere.**

## What happens to your file

When you choose or drop a DNA file, it is read by your own browser using the standard `File` API and held in memory inside that browser tab. It is parsed and analyzed with JavaScript running on your device. When you close or reload the tab, it is gone. Genoscope has no backend, no database, and no upload endpoint, so there is nowhere for your genetic data to be sent.

You can verify this yourself:

- Open your browser's developer tools, go to the **Network** tab, and analyze a file. You will see no requests carrying your data.
- Or disconnect from the internet first. The app still works, because it never needed the network.

## No tracking

- No analytics, no telemetry, no advertising, no third-party scripts.
- No cookies are set by the app.
- Your language choice is saved in your browser's `localStorage` (key `genoscope-lang`) so the site remembers it. That value stays on your device and is never transmitted.

## Hosting

The site is served as static files from **GitHub Pages**. Like any website, the host (GitHub) can see standard request metadata such as your IP address and user agent when your browser downloads the page's files. That is GitHub's logging of the page load itself, governed by [GitHub's Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement). It has nothing to do with your DNA file, which never leaves your device.

You can remove even that by running Genoscope locally (`npm run build`) or self-hosting the static `dist/` folder anywhere you like.

## Changes

If this ever changes, it will change here and in the code, in the open. Because the whole app is open source, you never have to trust this document. You can read the code.

_Genoscope is a hobby project and not a medical device. See the [disclaimer in the README](README.md#disclaimer)._
