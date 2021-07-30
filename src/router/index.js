import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    redirect: 'registro/listado',
    component: () => import(/* webpackChunkName: "RegisterContainer" */ '@/views/Register/RegisterContainer.vue'),
    children:[
      {
        path: 'listado',
        name: 'registro-listado',
        component: () => import(/* webpackChunkName: "RegisterList" */ '@/views/Register/RegisterList.vue')
      },
      {
        path: 'crear',
        name: 'registro-crear',
        component: () => import(/* webpackChunkName: "RegisterCreate" */ '@/views/Register/RegisterCreate.vue')
      },
      {
        path: 'actualizar/:id',
        name: 'registro-actualizar',
        component: () => import(/* webpackChunkName: "RegisterUpdate" */ '@/views/Register/RegisterUpdate.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
