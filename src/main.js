import Vue from 'vue'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import VueClosable from 'vue-closable'
import VueRouter from 'vue-router'
import 'tachyons'
import { ApolloClient } from 'apollo-client'
import VueApollo from 'vue-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueClosable)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/pages/Home.vue').default
  }, {
    path: '*',
    component: require('./components/pages/404.vue').default
  }, {
    path: '/media/:url',
    component: require('./components/pages/media.vue').default
  },
  // AUTH PAGES
  {
    path: '/auth/signin',
    component: require('./components/pages/auth/login.vue').default
  }, {
    path: '/auth/signup',
    component: require('./components/pages/auth/register.vue').default
  }, {
    path: '/auth/lost-password',
    component: require('./components/pages/auth/lostpassword.vue').default
  }, {
    path: '/terms',
    component: require('./components/pages/terms.vue').default
  }]
})

const httpLink = new HttpLink({
  uri: 'http://yumevalley-api.herokuapp.com/',
  fetchOptions: { method: "POST" },
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

new Vue({
  el: '#app',
  apolloProvider,
  router,
  render: h => h(require('./App.vue').default),
})
