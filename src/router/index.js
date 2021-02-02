import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import day from '../views/day.vue';
import about from '../views/about.vue';
import doc from '../views/doc.vue';
import game from '../views/game.vue';

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
