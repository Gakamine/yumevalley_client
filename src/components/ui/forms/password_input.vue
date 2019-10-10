<template>
    <input class="form-password" type="password" :placeholder="placeholder"/>
</template>
<script>
export default {
    props: ['placeholder']
}
</script>
<style>
.form-password {
    border: none;
    background-color: #f9f9f9;
    font-size: 18px;
    padding: 15px;
    margin: 5px;
    border-radius: 6px;
    width: 100%;
}
</style>