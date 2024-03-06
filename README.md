# Reproduction of `@vanilla-extract/vite-plugin` bug

When vite is run in watch mode, and styles are changed in source,
vanilla extract fails to output new values in `dist/style.css`.

To reproduce

1. Start vite in watch mode with `pnpm vite build --watch`
2. Observe that values in [src/index.css.ts](src/index.css.ts) are represented in [dist/style.css](dist/style.css)
3. Add or change the css properties in [src/index.css.ts](src/index.css.ts)
4. Observe that values have not been updated in [dist/style.css](dist/style.css)
