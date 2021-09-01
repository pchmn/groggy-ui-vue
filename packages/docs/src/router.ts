import Home from '@docs/pages/Home.vue';
import Docs from '@docs/pages/Docs/Docs.vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import docsRoutes from '@docs/pages/Docs/docs.router';

const routes = [
  { path: '/', component: Home },
  { path: '/docs', component: Docs, children: docsRoutes },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
