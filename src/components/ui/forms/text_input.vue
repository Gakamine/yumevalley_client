<template>
    <input class="form-text" type="text" :placeholder="placeholder"/>
</template>
<script>
export default {
    props: ['placeholder']
}
</script>
<style>
.form-text {
    border: none;
    background-color: #f9f9f9;
    font-size: 18px;
    padding: 15px;
    border-radius: 6px;
    width: 100%;
    margin: 5px;
}
</style>