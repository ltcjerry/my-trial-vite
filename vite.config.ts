import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

import { resolve } from 'path'
const pathResolve = (dir: string): string => {
  return resolve(__dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-import.d.ts"
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve("src")
    }
  }
})
