import Vue from 'vue'
import 'bootstrap';
import VueRouter from 'vue-router'
import 'tachyons'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/pages/Home.vue').default
  }, {
    path: '*',
    component: require('./components/pages/404.vue').default
  }, {
    path: '/media/:slug',
    component: require('./components/pages/media.vue').default
  }]
})

new Vue({
  el: '#app',
  router,
  render: h => h(require('./App.vue').default),
})
