import { defineConfig } from 'vite'

// 文件入口，input file
const entryFileNames = {
  index: 'src/ts/index.ts',
}

export default defineConfig(({ command, mode }) => {
  var isProd = mode === 'production';
  const isWatch = !isProd;
  console.log(process.env.buildWatch, isWatch)
  return {
    base: "./",
    build: {
      outDir: './dist',
      // assetsDir: './assets',
      sourcemap: !isProd,
      chunkSizeWarningLimit: 20, // 20 KB
      watch: isWatch,
      rollupOptions: {
        input: entryFileNames,
        // 用于排除不需要打包的依赖
        // external: ["react", "react-dom"],
        output: {
          chunkFileNames: '[name].js',
          entryFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
        },
      },
    },
  }
}
)
