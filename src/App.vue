<template>
  <div id="app">
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

export default {
  components: {
    NavBar,
    SideMenu
  }
};
</script>

<style>
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
}
a {
  text-decoration: none !important;
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
