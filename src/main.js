import Vue from 'vue'
import 'bootstrap'
import VueRouter from 'vue-router'
import 'tachyons'
import { ApolloClient } from 'apollo-client'
import VueApollo from 'vue-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

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

const httpLink = new HttpLink({
  uri: 'https://yumevalley-api.herokuapp.com/graphql',
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
