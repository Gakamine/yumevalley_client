<template>
  <div class="SideMenuItem">
    <slot></slot>
    {{ name }}
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .SideMenuItem {
    border-radius: 6px;
    height: 50px;
    align-items: center;
    display: flex;
    padding: 0 20px;
    font-size: 24px;
    margin: 3px 0;
    cursor: pointer;
  }
}
@media screen and (max-width: 1024px) {
  .SideMenuItem {
    align-items: center;
    display: block;
    padding: 0 20px;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    height: 100%;
  }

  .SideMenuItem svg {
    margin: 0 !important;
    width: 100%;
  }
}

.SideMenuItem:hover {
  background-color: #f9f9f9;
}
svg {
  margin-right: 20px;
}
</style>
