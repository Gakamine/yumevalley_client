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

.SideMenuItem:hover {
  background-color: #f9f9f9;
}
svg {
  margin-right: 20px;
}
</style>
