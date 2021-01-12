// 引入vue
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/home/Home')
const Category = () => import('../pages/category/Category')
const Show = () => import('../pages/show/Show')
const Mine = () => import('../pages/mine/Mine')

//创建router
const routes = [
  {
    path: '',
    redirect:'/Home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Show',
    component: Show
  },
  {
    path: '/Mine',
    component: Mine
  },

]
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes,
})

//导出router
export default router

