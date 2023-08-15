import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.tsx',
    'src/components/*.tsx',
    'src/helpers/*.ts',
    'src/styles.css',
    'src/lib/db.ts',
    'src/lib/dbWeb.ts',
    'src/interface.ts'
  ],
  outDir: 'dist',
  target: 'es2017',
  platform: 'node',
  splitting: false,
  shims: false,
  sourcemap: true,
  dts: true,
  loader: {
    '.css': 'css'
  }
})
