import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ include: ['lib'], tsconfigPath: './tsconfig.app.json' })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "lib")
    }
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'SherlocksSanityLibrary',
      formats: ['es']
    }
  }
})
