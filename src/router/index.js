import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{ path: '/', component: () => import('../views/MainPage') }];

const router = new VueRouter({
  mode: 'history',
  base: '/elcore-test/',
  routes,
});

export default router;
