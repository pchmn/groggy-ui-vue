import Vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { AliasOptions, defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import Markdown from '../vite-plugin-md';

let alias: AliasOptions = {};
if (process.env.APP_ENV === 'development') {
  alias = [
    {
      find: /^@groggy-ui\/vue$/,
      replacement: path.resolve(__dirname, '../@groggy-ui-vue/src/index'),
    },
    {
      find: /^@groggy-ui\/vue\/dist\/(.*)/,
      replacement: path.resolve(__dirname, '../@groggy-ui-vue/src/$1'),
    },
    {
      find: /^@components\/(.*)/,
      replacement: path.resolve(
        __dirname,
        '../@groggy-ui-vue/src/components/$1'
      ),
    },
    {
      find: /^@directives\/(.*)/,
      replacement: path.resolve(
        __dirname,
        '../@groggy-ui-vue/src/directives/$1'
      ),
    },
    {
      find: /^@models\/(.*)/,
      replacement: path.resolve(__dirname, '../@groggy-ui-vue/src/models/$1'),
    },
    {
      find: /^@themes\/(.*)/,
      replacement: path.resolve(__dirname, '../@groggy-ui-vue/src/themes/$1'),
    },
    {
      find: /^@utils\/(.*)/,
      replacement: path.resolve(__dirname, '../@groggy-ui-vue/src/utils/$1'),
    },
    {
      find: /^@shared\/(.*)/,
      replacement: path.resolve(__dirname, '../@groggy-ui-vue/src/shared/$1'),
    },
    {
      find: /^@hooks\/(.*)/,
      replacement: path.resolve(__dirname, '../@groggy-ui-vue/src/hooks/$1'),
    },
    {
      find: /^@docs\/(.*)/,
      replacement: path.resolve(__dirname, 'src/$1'),
    },
  ];
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vitePluginVuedoc({
    //   previewComponent: 'DemoPreview',
    // }),
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Pages(),
    Components({
      resolvers: [
        // example of importing Vant
        (name) => {
          // where `name` is always CapitalCase
          if (name.startsWith('G'))
            return { importName: name, path: '@groggy-ui/vue' };
        },
      ],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    Markdown({
      wrapperComponent: 'DemoPreview',
    }),
    // svgLoader({
    //   svgo: false,
    // }),
  ],
  base: '/groggy-ui-vue/',
  resolve: {
    alias,
  },
});
