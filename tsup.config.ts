import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['cli/index.ts'],
  splitting: false,
  clean: true,
  outDir: 'dist/cli',
});
