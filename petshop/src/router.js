import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Release from './views/Release'
import Sell from './views/Sell'
import Mine from './views/Mine'
import Search from './views/Search'
import GoodInside from './views/goodInside'
import PetOrder from './views/PetOrder'
import Comments from './views/Comments'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'*',
      redirect: Home,
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/release',
      name: 'release',
      component: Release
    },
    {
      path: '/sell',
      name: 'sell',
      component: Sell
    },
    {
      path: '/goodinside',
      name: 'goodinside',
      component: GoodInside
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/petorder',
      name: 'petorder',
      component: PetOrder
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
