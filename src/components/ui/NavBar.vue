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
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
