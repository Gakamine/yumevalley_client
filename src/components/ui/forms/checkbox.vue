<template>
    <p><input type="checkbox"/>{{ placeholder }}</p>
</template>
<script>
export default {
    props: ['placeholder']
}
</script>
<style>
input {
    border: none;
    background-color: #f9f9f9;
    font-size: 18px;
    padding: 15px;
    border-radius: 6px;
}
</style>