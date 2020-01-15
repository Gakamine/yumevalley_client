<template>
  <section class="HomeSection">
    <h2>{{ title }}</h2>
    <div class="HomeSection__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title"]
};
</script>
<style scoped>
h2 {
  font-size: 36px;
  margin-top: 0;
  font-weight: normal;
}
.HomeSection {
  margin-bottom: 20px;
}
@media screen and (min-width: 1024px) {
  .HomeSection__content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
@media screen and (max-width: 1024px) {
  .HomeSection__content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(108.75px, 1fr));
  }
}
</style>
