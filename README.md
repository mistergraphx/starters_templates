# Starter templates

A collection of simple starter templates.

## Structure

- `index.html` : demo page with all HTML5 tags, used as a styleguide.
- `css/styles.css` : entry point. It declares the layer order and imports the other files.
  - `css/base.css` : reset and browser defaults (`base` layer).
  - `css/tokens.css` : colour scheme and theme overrides (`tokens` layer).
  - `css/layout.css` : structure only, no colours or borders (`layout` layer).
  - `css/utilities.css` : single-purpose helpers (`utilities` layer, last).
- `css/print.css` : print stylesheet, loaded separately with `media="print"` so it does not weigh on the main sheet.
- `postcss.config.js` : production pipeline (inline imports, cascade layers fallback, minification).

## Usage

Open `index.html` directly, or serve the folder. In development, `css/styles.css` is loaded as-is and the browser handles `@layer`.

For production:

```bash
npm install
npm run build:css   # writes dist/styles.css and dist/print.css
```

The build transforms `@layer` for browsers listed in `.browserslistrc`. Those browsers do not support cascade layers natively.
