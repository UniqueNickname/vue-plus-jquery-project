import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ChangingImages',
    name: 'ChangingImages',
    component: () => import('../views/ChangingImages.vue')
  },
  {
    path: '/PhotoGallery',
    name: 'PhotoGallery',
    component: () => import('../views/PhotoGallery.vue')
  },
  {
    path: '/SmartMenu',
    name: 'SmartMenu',
    component: () => import('../views/SmartMenu.vue')
  },
  {
    path: '/WorkWithForm',
    name: 'WorkWithForm',
    component: () => import('../views/WorkWithForm.vue')
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
