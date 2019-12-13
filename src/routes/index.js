import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/views/Home'),
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('@/views/Register'),
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/Login'),
    },
    {
      name: 'control',
      path: '/control',
      component: () => import('@/views/control'),
    },
    {
      name: 'passwordreset',
      path: '/passwordreset',
      component: () => import('@/views/passReset'),
    },

    {
      name: 'resetemail',
      path: '/resetemail',
      component: () => import('@/views/resetemail'),
    },
    {
      name: 'text',
      path: '/text',
      component: () => import('@/views/phone'),
    },
    {
      name: 'authphone',
      path: '/phoneauth',
      component: () => import('@/views/PlaceCode'),
    },
  ]
});
