import Vue from 'vue';
import Router from 'vue-router';
import VueSession from 'vue-session';

import Index from '@/components/Index';
import Login from '@/components/Login';

Vue.use(Router);
Vue.use(VueSession);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
  mode: 'history',
});
