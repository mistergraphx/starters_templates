import atImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";
import csso from "postcss-csso";

// Production build only: development serves the source files unchanged.
const production = process.env.NODE_ENV === "production";

/** @type {import('postcss-load-config').Config} */
const config = {
	// Order matters: inline @import first, then transform (cascade layers for
	// browsers without @layer, per .browserslistrc), then minify.
	plugins: production ? [atImport(), postcssPresetEnv(), csso()] : [],
	map: production ? false : "inline",
};

export default config;
