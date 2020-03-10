import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import RecipesNew from '../views/RecipesNew.vue'
import RecipesShow from '../views/RecipesShow.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/about', name: 'about', component: About},
  {path: '/recipes/new', name: 'recipes-new', component: RecipesNew},
  {path: '/recipes/:id', name: 'recipes-show', component: RecipesShow}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
