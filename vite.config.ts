import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { libInjectCss } from "vite-plugin-lib-inject-css";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    libInjectCss(),
    tailwindcss(),
    dts({ include: ['lib'], tsconfigPath: './tsconfig.app.json' })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "lib")
    }
  },
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: ['vue'],
    },
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'SherlocksSanityLibrary',
      formats: ['es']
    }
  }
})
