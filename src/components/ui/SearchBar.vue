<template>
  <div class="SearchBar">
    <SearchIcon/>
    <input class="SearchBar__input" type="text" v-model="query" placeholder="Search...">
  </div>
</template>

<script>
import { SearchIcon } from "vue-feather-icons";
export default {
  name: "SearchBar",
  data: () => ({
    query: ""
  }),
  components: {
    SearchIcon
  }
};
</script>

<style scoped>
.SearchBar {
  height: 38px;
  width: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  background: #f9f9f9;
  border-radius: 6px;
}
.SearchBar__input {
  border: none;
  border-radius: 6px;
  background: #f9f9f9;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #333;
  padding-right: 15px;
}
.SearchBar svg {
  margin-right: 5px;
  margin-left: 5px;
  color: #cecece;
}
</style>
