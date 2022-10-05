import { ConfigEnv, UserConfig } from 'vite'
import { resolve } from 'path'
// 这个文件中统一处理插件，避免vite.config.ts文件过于臃肿
import { createVitePlugins } from './config/vite/plugins'
export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  const base: string = isBuild ? '/vite-vue3-ts/' : '/'
  return {
    base,
    server: {
      port: 3001
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 路径别名
      },
      extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    plugins: createVitePlugins(isBuild)
  }
}
