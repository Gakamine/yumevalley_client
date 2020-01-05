<template>
    <section>
        <div id="media-description">
            <img :src="creation[0].coverUrl"/>
            <h1>{{ creation[0].title }}</h1>
            <p>Created by {{ creation[0].user.username }}</p>
            <p>{{ creation[0].description }}</p>
        </div>
        <div id="media-chapters-list">

        </div>
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
<style scoped>
@media screen and (min-width: 1024px) {
    #media-description {
        width: 90%;
        height: 324px;
        background-color: #f9f9f9;
        border-radius: 8px;
    }
    #media-description img {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
        border-radius: 8px;
        cursor: pointer;
        transition-duration: 0.15s;
        overflow: hidden;
        height: 324px;
        width: 210px;
        float: left;
    }
    #media-description p {
        padding-right: 5px;
    }
}
@media screen and (max-width: 1024px) {
}
</style>