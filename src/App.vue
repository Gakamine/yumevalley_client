<template>
  <div id="app">
    <headbar />
    <div id="core" class="row">
      <sidenav />
      <core />
    </div>
  </div>
</template>

<script>
import headbar from './components/header.vue'
import sidenav from './components/sidenav.vue'
import core from './components/core.vue'

export default {
  name: 'app',
  components: {
    headbar,
    sidenav,
    core
  }
}
</script>

<style>
* {
  outline: none;
}

header {
  background-color: white;
  width: 100%;
  height: 50px;
  left: 0px;
  position: fixed;
  border-bottom: 2px solid #f9f9f9;
  display: block;
  margin: 0 !important;
  z-index: 1;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: white;
}

#logo-container svg,#logo-container {
  height: 50px;
  width: auto;
  text-align: center;
  color: black;
}

#core {
  padding-top: 50px;
  margin: 0px !important;
}

.searchbar {
  background-color: #f9f9f9;
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
}

.searchbar input {
  border: none;
  background-color: #f9f9f9;
  width: calc(100% - 34px);
}

#sidemenu {
  padding-left: 0px !important;
}

#sidemenu .active {
  background-color: #f9f9f9;
}

#sidemenu a {
  color: black !important;
  text-decoration: none !important;
}

.sidemenu-element {
  border-radius: 0px 10px 10px 0px;
  font-size: 24px;
  padding: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.sidemenu-element svg {
  margin-right: 10px;
  margin-left: 10px;
}

.dot {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;
}

.active .dot {
    background-color: black;
}

svg {
  vertical-align: middle;
}
</style>
