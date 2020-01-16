<template>
  <div class="Logo">
    <router-link to="/">
      <img src="@/assets/logo.png" alt="Logo">
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Logo {
  height: 64px;
  align-items: center;
  display: flex;
}

.Logo img {
  padding: 5px;
  width: 64px;
}

</style>
