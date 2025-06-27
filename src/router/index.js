import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import WhoView from '../views/WhoView.vue'
import NewsView from '../views/NewsView.vue'
import LoginView from '../views/LoginView.vue'
import NewReviewView from '@/views/NewReviewView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/Who',
      name: 'Who',
      component: WhoView,
    },
    {
      path: '/News',
      name: 'News',
      component: NewsView,
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginView,
    },{
      path: '/NewReview',
      name: 'NewReview',
      component: NewReviewView
    }
  ],
})

export default router
