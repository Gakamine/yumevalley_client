<template>
    <section>
        <CreationCardLoading v-if="$apollo.queries.creation.loading"/>
        <CreationCard
            :key="creation.id"
            :creation_data="creation"/>
        <!-- <ChapterList/> -->
    </section>
</template>
<script>
import { GET_CREATION_QUERY } from '../../graphql/fetch_creation'
import CreationCard from "../ui/CreationCard";
import CreationCardLoading from "../ui/lazy-components/CreationCardLoading"
// import ChapterList from "../ui/Chapter-list"

export default {
    components: {
        CreationCard,
        CreationCardLoading,
        // ChapterList
    },
    apollo: {
        creation: {
            query: GET_CREATION_QUERY,
            result: ({ data }) => {
                document.title = data.creation[0].title + " - YumeValley"
            },
            variables () {
                return {
                    url: this.url
                }
            },
            error() {
                this.$router.push("/404")
            }
        },
    },
    data () {
        return {
            creation: [],
            url: this.$route.params.url,
        }
    }
}
</script>