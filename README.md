# Starter templates

A collection of simple starter templates.

## Structure

- `src/` : sources of the starter.
  - `src/index.html` : demo page with all HTML5 tags, used as a styleguide.
  - `src/robots.txt` : robots file of the demo, currently blocks all crawlers.
  - `src/css/styles.css` : entry point. It declares the layer order and imports the other files.
    - `src/css/base.css` : reset and browser defaults (`base` layer).
    - `src/css/tokens.css` : colour scheme and theme overrides (`tokens` layer).
    - `src/css/layout.css` : structure only, no colours or borders (`layout` layer).
    - `src/css/components/` : one file per block, named after the block (`button.css`, …) (`components` layer).
    - `src/css/utilities.css` : single-purpose helpers (`utilities` layer, last).
    - `src/css/print.css` : print stylesheet, loaded separately with `media="print"` so it does not weigh on the main sheet.
- `postcss.config.js` : production pipeline (inline imports, cascade layers fallback, minification).

## Conventions

- `base` holds element rules only. Every value you may want to change lives in `tokens.css`.
- Custom properties are named category first, then role, in kebab-case (`--color-text`, `--font-size-base`). The names follow the path structure of a [Design Tokens Format Module](https://www.designtokens.org/TR/third-editors-draft/format/) file. The spec does not impose naming, so this is a choice: it keeps the names ready if you later generate them from a shared token file.
- `components/`: one file per block, named after it. Modifiers and elements of the block stay in the same file. No catch-all files.
- Keep the order of the `@layer` list in `styles.css`. Later layers win.

## Deployment

`.github/workflows/pages.yml` builds the starter on every pull request, and publishes `dist/` to GitHub Pages on every push to `master`.

One-time setup in the repository settings: Settings → Pages → Build and deployment → Source: **GitHub Actions**.

## Copy-paste, without a build

Copy the whole `src/` folder (`index.html`, `robots.txt`, `css/`) as it is and open `index.html`. No build step is needed.

- Copy the whole folder: the CSS is split across several files linked together.
- Browsers without native `@layer` (Chrome before 99, Firefox before 97, Safari before 15.4) ignore the layered styles, so the page shows without styling. If you need those browsers, use `npm run build` instead.

## Usage

Open `src/index.html` directly, or serve the folder. In development, `src/css/styles.css` is loaded as-is and the browser handles `@layer`.

For a static demo, build and serve the `dist/` folder:

```bash
npm install
npm run build       # writes dist/index.html, dist/robots.txt and dist/css/ (minified CSS)
```

`dist/` mirrors `src/`: the HTML links to `css/styles.css` in both, so the same paths work in development and after the build.

The build transforms `@layer` only if a browser listed in `.browserslistrc` does not support cascade layers natively.
