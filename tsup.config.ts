import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.tsx',
    'src/components/*.tsx',
    'src/icons/*.tsx',
    'src/skeleton/*.tsx',
    'src/helpers/*.ts',
    'src/styles.css',
    'src/lib/db.ts',
    'src/lib/hooks.ts',
    'src/interface.ts'
  ],
  outDir: 'dist',
  target: 'node18',
  platform: 'node',
  format: 'esm',
  splitting: false,
  shims: false,
  sourcemap: true,
  dts: true,
  loader: {
    '.css': 'css'
  }
})
