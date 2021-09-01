import MonorepoLibExample from '@groggy-ui/vue';
import '@groggy-ui/vue/dist/style.css';
import router from '@docs/router';
import { createApp } from 'vue';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import './style.css';

createApp(App)
  .use(MonorepoLibExample)
  .use(router)
  .component('HelloWorld', HelloWorld)
  .mount('#app');
