
import MonorepoLibExample from '@groggy-ui/vue';
import '@groggy-ui/vue/dist/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';

createApp(App).use(MonorepoLibExample).component('HelloWorld', HelloWorld).mount('#app')
