import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['cli/index.ts'],
  splitting: false,
  clean: true,
  minify: true,
  outDir: 'dist/cli',
});
