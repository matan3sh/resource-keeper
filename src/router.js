import { createRouter, createWebHistory } from 'vue-router';

import ResourceHome from '@/pages/ResourceHome';
import ResourceNew from '@/pages/ResourceNew';

const routes = [
  { path: '/', component: ResourceHome },
  { path: '/new', component: ResourceNew },
  { path: '/', redirect: { name: 'resourceHomePage' } },
  { path: '/resources', name: 'resourceHomePage', component: ResourceHome },
  { path: '/resources/new', name: 'resourceNewPage', component: ResourceNew },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
});

export default router;
