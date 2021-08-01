import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/index', routes: [
      { path: '/error-catch', component: '@/routes/catch-error'},
      { path: '/refs-transmit', component: '@/routes/refs-transmit'},
      { path: '/hoc', component: '@/routes/HOC'},
      { path: '/modal-test', component: '@/routes/modal'}
    ] },
  ],
  fastRefresh: {},
});
