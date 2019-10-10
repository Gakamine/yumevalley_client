<template>
    <section>
        <h1>{{ creation[0].title }}</h1>
        <p>{{ creation[0].description }}</p>
    </section>
</template>

<script>
import { GET_CREATION_QUERY } from '../../graphql/fetch_creation'

export default {
    data () {
        return {
            creation: '',
            url: this.$route.params.url
        }
    },
    apollo: {
        creation: {
            query: GET_CREATION_QUERY,
            variables () {
                return {
                    url: this.url
                }
            }
        }
    }
}
</script>