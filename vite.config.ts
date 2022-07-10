import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 引入element-ui自动按需导入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 导入eslint插件
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // dts: true,
      // imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()]
      // useSource: true
    }),
    Components({
      // dirs: ['src/components'],
      // extensions: ['vue'],
      // dts: true,
      resolvers: [ElementPlusResolver()]
    }),
    // 检查eslint规范
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    })
  ],
  base: '/',
  // 配置别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 配置全局css
        charset: false,
        javascriptEnabled: true,
        additionalData: `@import "${resolve(__dirname, 'src/assets/styles/globals.less')}";`
      }
    }
  }
})
