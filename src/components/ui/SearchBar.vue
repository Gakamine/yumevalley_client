<template>
  <div class="SearchBar">
    <input class="SearchBar__input" type="text" v-model="query">
    <div class="SearchBar__placeholder" v-if="query.length === 0">
      <SearchIcon/>Search
    </div>
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
  display: flex;
  align-items: center;
  position: relative;
}
.SearchBar__input {
  border: none;
  padding: 5px 12px;
  border-radius: 6px;
  background: #f9f9f9;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  font-family: "Montserrat";
  font-size: 16px;
  color: #333;
  padding: 0 20px;
}
.SearchBar__placeholder {
  pointer-events: none;
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
  color: #cecece;
}
.SearchBar__placeholder svg {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
</style>
