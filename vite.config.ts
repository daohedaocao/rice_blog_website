import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 引入element-ui自动按需导入插件
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 为打包后的文件提供兼容性插件
import legacy from '@vitejs/plugin-legacy'
// 导入eslint插件
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
// export default
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default ({ mode }) => {
  // 用于导入生产和开发环境的配置
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  }
  return defineConfig({
    base: './',
    plugins: [
      vue(),
      legacy({
        renderLegacyChunks: false,
        // targets: ['ie >= 11'],
        polyfills: ['es.promise.finally', 'es/map', 'es/set'],
        modernPolyfills: ['es.promise.finally']
      }),
      AutoImport({
        // dts: true,
        // imports: ['vue', 'vue-router'],
        // useSource: true
        // Auto import functions from Vue, e.g. ref, reactive, toRef...
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue'],
        resolvers: [
          ElementPlusResolver(),
          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon'
          })
        ]
      }),
      Components({
        // dirs: ['src/components'],
        // extensions: ['vue'],
        // dts: true,
        resolvers: [
          ElementPlusResolver(), // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep']
          })
        ]
      }),
      Icons({
        autoInstall: true
      }),
      // 检查eslint规范
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      })
    ],
    // assetsInclude: resolve(__dirname, 'src/assets'),
    // build: {
    //   target: ['ios11']
    // },
    // 配置别名
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      },
      extensions: ['.js', '.ts', '.json', '.jsx', 'jsx', '.vue']
    },
    css: {
      preprocessorOptions: {
        less: {
          // 配置全局css
          charset: false,
          javascriptEnabled: true,
          additionalData: `@import "${resolve(__dirname, 'src/assets/styles/globals.less')}";`,
          modifyVars: {
            hack: `true; @import (reference) "${resolve('src/assets/styles/globals.less')}";`
          }
        }
      }
    },
    server: {
      // 配置network
      host: '0.0.0.0',
      port: 3000,
      proxy: {
        '/rice': {
          target: 'http://127.0.0.1:5000',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/rice/, '')
        }
      }
    }
  })
}
