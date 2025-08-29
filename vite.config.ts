import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'
import {libInjectCss} from "vite-plugin-lib-inject-css";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    libInjectCss(),
    dts({include: ['lib'], tsconfigPath: './tsconfig.app.json'})
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "lib")
    }
  },
  optimizeDeps: {
    include: [
      '@sanity/image-url',
    ],
  },
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: ['vue', '@portabletext/vue', '@sanity/image-url'],
    },
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'SherlocksSanityLibrary',
      formats: ['es']
    }
  }
})
