<template>
  <div id="app" v-bind:class='isDarkmode'>
    <div v-if="!APIerror">
      <NavBar/>
      <div class="layout">
        <SideMenu/>
        <div class="router_view">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div v-else>
      <ErrorComponent/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/ui/NavBar.vue";
import SideMenu from "./components/ui/SideMenu.vue";
import ErrorComponent from './components/ui/APIerror.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/darkmode.css';
import { ALL_CREATIONS_QUERY } from './graphql/fetch_creations';

export default {
  components: {
    NavBar,
    SideMenu,
    ErrorComponent
  },
  data() {
    return {
      isDarkmode: localStorage.getItem('darkmode'),
      APIerror: false
    }
  },
  apollo: {
    creation: {
      query: ALL_CREATIONS_QUERY,
      variables () {
        return {
          url: this.url
        }
      },
      error() {
        this.APIerror=true
      }
    },
  }
};
</script>

<style>
@import './assets/css/forms.css';

body {
  color: #333;
  margin: 0;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
}
#app {
  margin: 0;
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100%;
}
a {
  text-decoration: none !important;
  color: #737373;
}
a:hover {
    color: rgb(53, 53, 53);
}
@media screen and (max-width: 1024px) {
  .layout {
    display: block;
    margin: 64px 0px 0px 0px;
    grid-template-columns: 230px 1fr 230px;
    grid-gap: 60px;
  }
  .router_view {
    padding: 10px 5px 50px 5px;
  }
}
@media screen and (min-width: 1024px) {
  .layout {
    margin: 70px 20px 0px 20px;
    display: grid;
  }
  .router_view {
    margin-left: 250px;
  }
}
</style>
