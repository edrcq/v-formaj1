import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'DefaultLayout',
      requireAuth: false,
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      layout: 'DefaultLayout',
      requireAuth: false,
    },
  },
  {
    path: '/r/:id',
    name: 'ReadPost',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog/ReadPost.vue'),
    meta: {
      layout: 'DefaultLayout',
      requireAuth: false,
    },
  },

  {
    path: '/tabs',
    name: 'Tabs',
    component: () => import(/* webpackChunkName: "tabs" */ '../views/Tabs/TabsParent.vue'),
    children: [
      {
        path: 'one',
        component: () => import(/* webpackChunkName: "tabs" */ '../views/Tabs/TabsOne.vue'),
      },
      {
        path: 'two',
        component: () => import(/* webpackChunkName: "tabs" */ '../views/Tabs/TabsTwo.vue'),
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
