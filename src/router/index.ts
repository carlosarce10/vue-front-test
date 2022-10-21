import Vue from 'vue';
import VueRouter from 'vue-router';
import Books from '../views/Books.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/book-list',
  },
  {
    path: '/book-list',
    name: 'Books',
    component: Books,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
