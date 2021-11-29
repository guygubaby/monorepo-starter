import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { presetUno } from 'unocss'
import Unocss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
      'core': resolve('../packages/core/src/index.ts'),
    },
  },
  plugins: [
    Vue(),
    Unocss({
      presets: [presetUno()],
    }),
  ],
  server: {
    port: 8080,
    fs: {
      strict: true,
    },
  },
  optimizeDeps: {},
})
