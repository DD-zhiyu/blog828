import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/Home.vue');
const day = () => import('../views/day.vue');
const about = () => import('../views/about.vue');
const doc = () => import('../views/doc.vue');
const game = () => import('../views/game.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/day',
    name: 'day',
    component: day,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/doc',
    name: 'doc',
    component: doc,
  },
  {
    path: '/game',
    name: 'game',
    component: game,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
