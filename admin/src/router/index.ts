import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      {
        name: 'home',
        path: '/',
        component: Home
      },
      {
        name: 'article',
        path: '/article/:id',
        component: Article,
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
