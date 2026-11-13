# Plague Crew press kit

Open `/PlagueCrewPresskit/` on the site. This is a static page: edit `index.html` to change content, and `presskit.css` to change its appearance. There is no CMS or save-in-browser editor.

## Fill in the kit

1. Search `index.html` for `To add`. Replace each placeholder with confirmed public copy and remove its `class="placeholder"` when ready.
2. Review the short description, genre, existing artwork, and social/store/trailer links. These were reused from the existing site. No release dates, ratings, prices, or player counts have been assumed.
3. Add approved files in an `assets/` folder inside this directory. Use clear filenames, for example `screenshot-01.png`, `plague-crew-logo.png`, and `press-assets.zip`.
4. Replace screenshot slots with the example below. Include an accurate caption and alt text, and link to the full-resolution image. Identify concept art separately from gameplay.
5. Replace logo slots with approved logo previews and download links. Include transparent versions and light/dark variants where available.
6. Add a real press email link (`mailto:...`), key request instructions, studio biography, credits, and asset usage permissions. Only include awards, quotes, or coverage if verified and attributed.
7. Upload a ZIP of approved assets and replace the factsheet's press assets placeholder with `<a href="assets/press-assets.zip" download>Download press assets (ZIP)</a>`. Include descriptions, screenshots, logos, credits, and usage terms in the archive.
8. Before launch, remove the draft notice, remove any unused placeholder sections, and remove `<meta name="robots" content="noindex">`. Check all downloads and links on desktop and mobile.

## Screenshot example

Replace an entire `<div class="asset-slot">...</div>` with:

```html
<figure class="artwork">
  <a href="assets/screenshot-01.png" download>
    <img src="assets/screenshot-01.png" alt="Describe what is visible in this gameplay screenshot" loading="lazy">
  </a>
  <figcaption>Gameplay screenshot — add a descriptive caption.</figcaption>
</figure>
```

For the contact field:

```html
<dd><a href="mailto:YOUR-EMAIL">YOUR-EMAIL</a></dd>
```

The page deliberately has no inactive download buttons or fake contact links. Add real links as the files and details become available. The existing capsule download serves the original repository image; replace it with higher-resolution press artwork if available.
