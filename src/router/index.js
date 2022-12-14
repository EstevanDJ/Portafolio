import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/SobreMi',
    name: 'SobreMi',
    component: () => import(/* webpackChunkName: "about" */ '../views/SobreMiView.vue')
  },
  {
    path: '/Curriculum',
    name: 'Curriculum',
    component: () => import(/* webpackChunkName: "about" */ '../views/CurriculumView.vue')
  },
  {
    path: '/Proyecto',
    name: 'Proyecto',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProyectoView.vue')
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactoView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
