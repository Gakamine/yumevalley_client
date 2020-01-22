<template>
    <section>
        <div id="creation__card">
            <div>
                <img class="creation__cover" :src="creation_data[0].coverUrl"/>
            </div>
            <div id="creation__details">
                <p id="creation__title">{{ creation_data[0].title }} <router-link id="creation__author" :to="'/user/'+ creation_data[0].user.username">by {{creation_data[0].user.username}}</router-link></p>
                <div class="tags-list">
                    <Tags class="tags" v-for="Tag in creation_data[0].tags"
                    :key="Tag.id"
                    :tagname="Tag.tagname"
                    />
                </div>
                <p id="creation__description">{{ creation_data[0].description }}</p>
            </div>
        </div>
    </section>
</template>
<script>
import Tags from '../ui/Tags'

export default {
    components: {
        Tags
    },
    props: ['creation_data']
}
</script>
<style scoped>
@media screen and (min-width: 1024px) {
    #creation__card {
        grid-template-columns: 200px 1fr;
    }
}
@media screen and (max-width: 1024px) {
    #creation__card {
        grid-template-columns: 108.75px 1fr;
    }
}
.creation__cover {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}
#creation__description {
    padding-left: 0px;
    display: inline-block;
    width: 100%;
}
#creation__card {
    display: grid;
    background-color: #f1f1f1;
    border-radius: 8px;
    margin-bottom: 20px;
}
#creation__title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 0;
    padding-left: 0;
    line-height: 1.25;
}
.tags {
    margin: 2px;
    padding: 3px;
    border-radius: 10px;
    text-align: center;
    color: white !important;
    background-color: #a5a5a5;
    float: left;
    outline: #9e9e9e !important; 
}
.tags:hover, .tags:focus {
    color: white !important;
    background-color: #9e9e9e;
}
.tags-list {
    display: inline;
}
#creation__details {
    margin-left: 10px;
    padding-right: 10px;
}
#creation__title {
    display: block;
}
#creation__author {
    font-weight: lighter;
    font-size: 24px;
}
</style>