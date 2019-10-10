<template>
  <nav class="NavBar">
    <div class="nav-items">
      <router-link to="/">
        <logo></logo>
      </router-link>
    </div>
    <SearchBar/>
    <div class="nav-items">
      <Account/>
    </div>
  </nav>
</template>

<script>
import Logo from "./Logo";
import Account from "./Account"
import SearchBar from "./SearchBar";

export default {
  name: "NavBar",
  components: {
    Logo,
    SearchBar,
    Account
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

@media screen and (min-width: 1024px) {
  .nav-items {
    width: 200px;
  }
}
@media screen and (max-width: 1024px) {
  .nav-items {
    width: 64px;
  }
}
</style>
