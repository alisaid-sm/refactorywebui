import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
/*
component :
Navbar.vue
Footer.vue
NavbarCourse.vue
FooterCourse.vue
NavbarBlog.vue
view :
Login.vue
Home.vue
Course.vue
ListCourse.vue
DetailCourse.vue
Blog.vue
DetailBlog.vue
*/
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import('../views/Course.vue')
  },
  {
    path: '/listcourse',
    name: 'ListCourse',
    component: () => import('../views/ListCourse.vue')
  },
  {
    path: '/detailcourse',
    name: 'DetailCourse',
    component: () => import('../views/DetailCourse.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('../views/Post.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
