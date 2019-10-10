<template>
    <button>{{ placeholder }}</button>
</template>
<script>
export default {
    props: ['placeholder']
}
</script>
<style>
button {
    border: solid 1px black;
    background-color: #f9f9f9;
    font-size: 18px;
    padding: 15px;
    border-radius: 6px;
    margin: 15px;
}
button:hover {
    border: solid 1px black;
    background-color: black;
    color: #f9f9f9;
}
</style>