<template>
    <router-link :to="'/discover?tags='+tagname">
        {{ tagname }}
    </router-link>
</template>
<script>
export default {
    props: ['tagname']
}
</script>