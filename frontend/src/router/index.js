import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    }
  ]
})

export default router;
