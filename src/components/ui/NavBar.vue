<template>
  <nav class="NavBar">
    <logo></logo>
    <SearchBar/>
  </nav>
</template>

<script>
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default {
  name: "NavBar",
  components: {
    Logo,
    SearchBar
  }
};
</script>

<style>
.NavBar {
  height: 64px;
  border-bottom: 1px solid #eee;
  padding: 0 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  position: fixed;
  width: 100%;
  height: 64px;
  background-color: white;
  top: 0;
  z-index: 1;
}
</style>
