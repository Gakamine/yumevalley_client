<template>
    <div id="error">
        <img :src="require('../../assets/logo.png')"/>
        <h1>We couldn't reach the server...</h1>
        <h2>Please, check the <a href="http://status.yumevalley.com">status page</a> to see the actual state of our services.</h2>
    </div>
</template>
<style scoped>
h1, h2 {
    text-align: center;
}
img {
    width: 150px;
    height: auto;
    margin-left: calc(50% - 75px);
    margin-top: 10%;
    margin-bottom: 10%;
}
</style>