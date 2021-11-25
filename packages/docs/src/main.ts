import router from '@docs/router';
import MonorepoLibExample from '@groggy-ui/vue';
import '@groggy-ui/vue/dist/style.css';
import 'vite-plugin-vuedoc/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import DemoPreview from './components/DemoPreview.vue';
import './style.scss';
import hljs from 'highlight.js'
import { hljsDefineVue } from './language-vue'

hljs.registerLanguage('vue', hljsDefineVue)

createApp(App)
  .use(MonorepoLibExample)
  .use(router)
  .component('DemoPreview', DemoPreview)
  .mount('#app');
