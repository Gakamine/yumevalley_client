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
import { Table } from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueClosable)
Vue.use(Table)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/pages/home.vue').default,
    meta: {title: 'Yumevalley'}
  }, {
    path: '*',
    component: require('./components/pages/404.vue').default,
    meta: {title: 'Yumevalley'}
  }, {
    path: '/media/:url',
    component: require('./components/pages/media.vue').default,
    props: { loading: 0},
    meta: {title: 'Yumevalley'}
  },
  // AUTH PAGES
  {
    path: '/auth/signin',
    component: require('./components/pages/auth/login.vue').default,
    meta: {title: 'Login - Yumevalley'}
  }, {
    path: '/auth/signup',
    component: require('./components/pages/auth/register.vue').default,
    meta: {title: 'Register - Yumevalley'}
  }, {
    path: '/auth/lost-password',
    component: require('./components/pages/auth/lostpassword.vue').default,
    meta: {title: 'Yumevalley'}
  }, {
    path: '/terms',
    component: require('./components/pages/terms.vue').default,
    meta: {title: 'Terms - Yumevalley'}
  }]
})

const httpLink = new HttpLink({
  uri: 'https://yumevalley-api.herokuapp.com/',
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  el: '#app',
  apolloProvider,
  router,
  render: h => h(require('./App.vue').default),
})
