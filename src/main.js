// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

//配置路由
const router = new VueRouter({
  routes:[
      {path:"/",component:Home},
      {path:"/helloworld",component:HelloWorld}
  ],
    mode:'history'
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
