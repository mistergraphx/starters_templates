# Starter templates

A collection of simple starter templates.

## Structure

- `index.html` : demo page with all HTML5 tags, used as a styleguide.
- `css/styles.css` : entry point. It declares the layer order and imports the other files.
  - `css/base.css` : reset and browser defaults (`base` layer).
  - `css/tokens.css` : colour scheme and theme overrides (`tokens` layer).
  - `css/utilities.css` : single-purpose helpers (`utilities` layer, last).
- `postcss.config.js` : production pipeline (inline imports, cascade layers fallback, minification).

## Usage

Open `index.html` directly, or serve the folder. In development, `css/styles.css` is loaded as-is and the browser handles `@layer`.

For production:

```bash
npm install
npm run build:css   # writes dist/styles.css
```

The build transforms `@layer` for browsers listed in `.browserslistrc`. Those browsers do not support cascade layers natively.
