import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'  
import Start from '../views(1-3)/Start.vue'
import RoomList from '../views(1-3)/RoomList.vue'
import InRoom from '../views(1-3)/InRoom.vue'
import GameRoom from '../view4_5/GameRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path:'/home',
    name: 'roomlist',
    component: RoomList
  },
  {
    path: '/room/:name',
    name: 'inroom',
    component: InRoom
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/gameroom',
    name: 'gameroom',
    component: GameRoom
  },
  {
    path: '/score',
    name: 'score',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "score" */ '../views/Score.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
