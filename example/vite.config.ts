import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    eslint()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000,
    cors: true,
    proxy: {}
  },
  envDir: path.resolve(__dirname, 'env'),
  build: {
    outDir: path.resolve(__dirname, '../dist')
  }
})
