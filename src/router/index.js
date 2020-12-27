import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

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
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import('../views/Course.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/listcourse',
    name: 'ListCourse',
    component: () => import('../views/ListCourse.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/detailcourse',
    name: 'DetailCourse',
    component: () => import('../views/DetailCourse.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('../views/Post.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLogin']) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
