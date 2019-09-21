import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Release from './views/Release'
import Sell from './views/Sell'
import Mine from './views/Mine'
import Search from './views/Search'
import PetOrder from './views/PetOrder'
import Comments from './views/Comments'
import Register from './views/Register'
import GoodClassfyAll from './views/GoodClassfyAll'
import Login from './views/Login'
import GoodsList from './views/GoodsList'
import Myrelease from './views/MyLink/Myrelease'
import Mypets from './views/MyLink/Mypets'
import Myorder from './views/MyLink/Myorder'
import Myfocus from './views/MyLink/Myfocus'
import Mydata from './views/MyLink/Mydata'
import Myaddress from './views/MyLink/Myaddress'
import Agreement from './views/MyLink/Agreement'

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
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/goodclassfyall',
      name: 'goodclassfyall',
      component: GoodClassfyAll
    },
    {
      path: '/goodslist',
      name: 'goodslist',
      component: GoodsList
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: Agreement
    },
    {
      path: '/myaddress',
      name: 'myaddress',
      component: Myaddress
    },
    {
      path: '/mydata',
      name: 'mydata',
      component: Mydata
    },
    {
      path: '/myfocus',
      name: 'myfocus',
      component: Myfocus
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: Myorder
    },
    {
      path: '/mypets',
      name: 'mypets',
      component: Mypets
    },
    {
      path: '/myrelease',
      name: 'myrelease',
      component: Myrelease
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
