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
.lds-ring {
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  margin: 6px;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: gray transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
    grid-template-columns: 230px 1fr;
    grid-gap: 60px;
  }
}
</style>
