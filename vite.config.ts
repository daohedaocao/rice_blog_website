import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// vite.config.js 文件
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // 检查eslint规范
        eslintPlugin({
            include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
        })],
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
