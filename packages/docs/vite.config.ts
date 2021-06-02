import vue from '@vitejs/plugin-vue';
import path from 'path';
import { AliasOptions, defineConfig } from 'vite';

let alias: AliasOptions;
if (process.env.APP_ENV === 'development') {
  alias = [
    { find: /^@la-danze-ui\/vue$/, replacement: path.resolve(__dirname, '../@la-danze-ui-vue/src/index') },
    { find: /^@la-danze-ui\/vue\/dist\/style\.css/, replacement: path.resolve(__dirname, '../@la-danze-ui-vue/src/style.css') }
  ];
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/la-danze-ui-vue/',
  resolve: {
    alias
  },
})
