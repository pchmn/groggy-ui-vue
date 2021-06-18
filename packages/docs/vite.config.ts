import vue from '@vitejs/plugin-vue';
import path from 'path';
import { AliasOptions, defineConfig } from 'vite';

let alias: AliasOptions = {};
if (process.env.APP_ENV === 'development') {
  alias = [
    { find: /^@groggy-ui\/vue$/, replacement: path.resolve(__dirname, '../@groggy-ui-vue/src/index') },
    { find: /^@groggy-ui\/vue\/dist\/(.*)/, replacement: path.resolve(__dirname, '../@groggy-ui-vue/src/$1') },
    { find: /^@components\/(.*)/, replacement: path.resolve(__dirname, '../@groggy-ui-vue/src/components/$1') },
    { find: /^@models\/(.*)/, replacement: path.resolve(__dirname, '../@groggy-ui-vue/src/models/$1') },
    { find: /^@themes\/(.*)/, replacement: path.resolve(__dirname, '../@groggy-ui-vue/src/themes/$1') },
    { find: /^@utils\/(.*)/, replacement: path.resolve(__dirname, '../@groggy-ui-vue/src/utils/$1') },
  ];
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/groggy-ui-vue/',
  resolve: {
    alias
  },
})
