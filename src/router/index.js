import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "HomeView" */ '@/views/HomeView.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    redirect: 'registro/listado',
    component: () => import(/* webpackChunkName: "RegisterContainerView" */ '@/views/Register/RegisterContainerView.vue'),
    children:[
      {
        path: 'listado',
        name: 'registro-listado',
        component: () => import(/* webpackChunkName: "RegisterListView" */ '@/views/Register/RegisterListView.vue')
      },
      {
        path: 'crear',
        name: 'registro-crear',
        component: () => import(/* webpackChunkName: "RegisterCreateView" */ '@/views/Register/RegisterCreateView.vue')
      },
      {
        path: 'actualizar/:id',
        name: 'registro-actualizar',
        component: () => import(/* webpackChunkName: "RegisterUpdateView" */ '@/views/Register/RegisterUpdateView.vue'),
        beforeEnter(to, from, next){
          const todo = store.state.register.registers.find(e => e.id === to.params.id)
    
          if(!todo){
            next({name: 'NotFound', params: { '0': to.path } })
          }
    
          next()
        }
      },
    ]
  }, 
  {
    path: '*', 
    name: 'NotFound', 
    component: () => import(/* webpackChunkName: "error-404-view */ '../views/Error404View.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
