<template>
    <section>
        <div id="media-description">
            <div id="media-cover">
                <img :src="creation[0].coverUrl"/>
            </div>
            <div id="media-details">
                <h1 id="media-title">{{ creation[0].title }}</h1>
                <router-link :to="'/user/'+creation[0].user.username">Created by {{ creation[0].user.username }}</router-link>
                <div class="tags-list">
                    <Tags class="tags" v-for="Tag in creation[0].tags"
                    :key="Tag.id"
                    :tagname="Tag.tagname"
                    />
                </div>
                <p>{{ creation[0].description }}</p>
            </div>
        </div>
        <div id="media-chapters-list">

        </div>
    </section>
</template>

<script>
import { GET_CREATION_QUERY } from '../../graphql/fetch_creation'
import Tags from '../ui/Tags'

export default {
    components: {
        Tags
    },
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
#media-description {
    width: 90%;
    background-color: #f1f1f1;
    border-radius: 8px;
}
#media-description {
    display: grid;
    grid-template-columns: 1fr 4fr;
}
.tags-list {
    display: flex;
}
.tags {
    margin: 5px;
    padding: 3px;
    border-radius: 10px;
    text-align: center;
    color: white !important;
    background-color: #a5a5a5;
}
.tags:hover {
    color: white !important;
    background-color: #9e9e9e;
}
#media-title {
    left: 225px;
}
</style>