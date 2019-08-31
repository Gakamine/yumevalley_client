<template>
  <div id="app">
    <NavBar/>
    <div class="layout">
      <SideMenu/>
      <router-view></router-view>
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
body {
  color: #333;
  margin: 0;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
}
#app {
  margin: 0;
}
.layout {
  margin: 28px 20px;
  display: grid;
  grid-template-columns: 230px 1fr 230px;
  grid-gap: 60px;
}
</style>
