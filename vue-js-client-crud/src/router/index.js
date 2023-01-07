import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    alais: '/tutorials',
    name: 'tutorials',
    component: () => import('../components/Tutorials/TutorialsList.vue')
  },
  {
    path: '/tutorials/:id',
    name: 'tutorials-details',
    component: () => import('../components/Tutorials/Tutorial')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../components/Tutorials/AddTutorial')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
