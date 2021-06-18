import vue from '@vitejs/plugin-vue'
import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      ...typescript({
        tsconfig: './tsconfig.json',
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: false,
            declaration: true,
            declarationMap: false,
          },
        },
      }),
      enforce: 'pre',
    },
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MonorepoLibExample'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      },
      // plugins: [
      //   typescript({ tsconfig: './tsconfig.json' }),
      // ]
    }
  }
})
