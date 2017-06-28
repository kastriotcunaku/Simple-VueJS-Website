import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Profile from '@/components/profile/Profile'
import Services from '@/components/services/Services'
import Contact from '@/components/contact/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello,
    meta: {title: 'Home'}
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {title: 'Profile'}
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {title: 'Services'}
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {title: 'Contact'}
  }
  ]
})
