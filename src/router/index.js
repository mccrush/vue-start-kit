import { createRouter, createWebHistory } from 'vue-router'
import { pages as routes } from './../data/dataPages'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  next()
})

export default router