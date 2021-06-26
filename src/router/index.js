import Vue from 'vue'
import VueRouter from 'vue-router'
import Hairsalons from '../components/Hairsalons.vue'
import HairsalonsAdd from '../components/HairsalonsAdd.vue'
import HairsalonsEdit from '../components/HairsalonsEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Hairsalons
  },
  {
    path: '/hairsalons',
    name: 'Hairsalons',
    component: Hairsalons
  },
  {
    path: '/addhair',
    name: 'AddHair',
    component: HairsalonsAdd
  },  
  {
    path: '/hairsalon/:hsalon_id',
    name: 'EditSalons',
    component: HairsalonsEdit
  },  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
