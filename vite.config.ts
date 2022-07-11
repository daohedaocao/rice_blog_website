import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 引入element-ui自动按需导入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 导入eslint插件
import eslintPlugin from 'vite-plugin-eslint'

function resolves(dir: string) {
  const _path: string = resolve(__dirname, dir)
  return _path
}

// https://vitejs.dev/config/
// export default
export default ({ mode }) => {
  // 用于导入生产和开发环境的配置
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  }
  return defineConfig({
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
        '@': resolves('src')
      },
      extensions: ['.js', '.ts', '.json', '.jsx', 'jsx', '.vue']
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
}
