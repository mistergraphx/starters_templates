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
    - `src/css/utilities.css` : single-purpose helpers (`utilities` layer, last).
    - `src/css/print.css` : print stylesheet, loaded separately with `media="print"` so it does not weigh on the main sheet.
- `postcss.config.js` : production pipeline (inline imports, cascade layers fallback, minification).

## Usage

Open `src/index.html` directly, or serve the folder. In development, `src/css/styles.css` is loaded as-is and the browser handles `@layer`.

For a static demo, build and serve the `dist/` folder:

```bash
npm install
npm run build       # writes dist/index.html, dist/robots.txt and dist/css/ (minified CSS)
```

`dist/` mirrors `src/`: the HTML links to `css/styles.css` in both, so the same paths work in development and after the build.

The build transforms `@layer` only if a browser listed in `.browserslistrc` does not support cascade layers natively.
