import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import App from '@/App'
import Info from '@/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Info',
      name: 'HelloWorld2',
      component: HelloWorld2
    },
    {
      path:'/App',
      name:'App',
      component:App,
    },
    {
      path:'/Info',
      name:'Info',
      component:Info,
    }
  ]
})
