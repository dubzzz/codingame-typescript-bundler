# codingame-typescript-bundler
Bundle your TypeScript project to run it in CodinGame contests

## Getting started

Your code as to be in `src/` directory. It can be composed of modules via `import` / `export`.

In order to compile your code into a single bundler, you have to either run a single build `npm run build` or an automatic build with `npm run watch`. It should result in a bundle file `lib/bundle.js`.

To use it in CodinGame just modify the content of `runAmd.js` by putting `lib/bundle.js` at `// Copy-paste the content of lib/bundle.js here`. Copy the resulting `runAmd.js` in CodinGame.

## More

You can also use a test runner - `Jest` is configured by default - to run tests.

Tests have to be put in `specs/**/*.spec.ts`.
