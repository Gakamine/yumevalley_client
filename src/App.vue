<template>
    <div id="app" v-bind:class='isDarkmode'>
      <NavBar/>
      <div class="layout">
        <SideMenu/>
        <div class="router_view">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
import NavBar from "./components/ui/NavBar.vue";
import SideMenu from "./components/ui/SideMenu.vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/darkmode.css';

export default {
  components: {
    NavBar,
    SideMenu
  },
  data() {
    return {
      isDarkmode: localStorage.getItem('darkmode')
    }
  }
};
</script>

<style>
@import './assets/css/forms.css';

* {
  outline: none;
}
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
    color: black;
}
@media screen and (max-width: 1024px) {
  .layout {
    display: block;
    margin: 64px 0px 0px 0px;
    grid-template-columns: 230px 1fr 230px;
    grid-gap: 60px;
  }
  .router_view {
    padding: 0px 20px 0px 20px;
  }
}
@media screen and (min-width: 1024px) {
  .layout {
    margin: 70px 20px 0px 20px;
    display: grid;
  }
  .router_view {
    margin-left: 300px;
  }
}
</style>
