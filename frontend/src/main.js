// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './styles/app.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView)

// router.beforeEach((to, from, next)=>{
//   console.log(to, from)
//   next()
// })

// ra

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
