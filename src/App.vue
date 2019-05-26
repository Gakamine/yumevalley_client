<template>
  <div id="app">
    <NavBar/>
    <div class="layout">
      <SideMenu/>
      <div>
        <HomeSection title="Popular">
          <MangaItem/>
          <MangaItem/>
          <MangaItem/>
        </HomeSection>
        <HomeSection title="Recommended">
          <MangaItem/>
          <MangaItem/>
          <MangaItem/>
        </HomeSection>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/ui/NavBar.vue";
import SideMenu from "./components/ui/SideMenu.vue";
import HomeSection from "./components/ui/HomeSection.vue";
import MangaItem from "./components/ui/MangaItem.vue";

export default {
  name: "app",
  components: {
    NavBar,
    SideMenu,
    HomeSection,
    MangaItem
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
