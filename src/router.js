import Vue from 'vue';
import Router from 'vue-router';
import SignIn from './views/SignIn.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
