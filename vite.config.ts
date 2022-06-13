/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    alias: {
      core: resolve('./packages/core/src/'),
    },
  },
  plugins: [
    AutoImport({
      imports: ['vitest'],
      dts: true,
    }),
  ],
})
