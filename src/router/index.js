import Vue from 'vue'
import VueRouter from 'vue-router'
import indexRoutes from './routes'
import authRoutes from './routes/auth'
import labRoutes from './routes/lab'
import customerRoutes from './routes/customer.js'

Vue.use(VueRouter)

const routes = [
  ...indexRoutes,
  ...labRoutes,
  ...authRoutes,
  ...customerRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router

