import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx', 'src/components/*.tsx'],
  outDir: 'dist',
  target: 'es2017',
  platform: 'browser',
  splitting: false,
  shims: false,
  sourcemap: true,
  dts: true
})
