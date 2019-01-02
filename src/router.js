import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('views/login/index.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('views/dashboard/index.vue'),
      children: [
        {
          path: 'msg',
          name: 'msg',
          component:() => import('views/dashboard/Msg.vue')
        }]
    },
    {
      path: '/workspace',
      name: 'workspace',
      component: () => import('views/workspace/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ 'views/About.vue')
    }
  ]
})
