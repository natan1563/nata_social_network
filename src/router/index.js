import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SelectedChat from '@/components/SelectedChat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat/:id',
    name: 'SelectedChat',
    component: SelectedChat
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
