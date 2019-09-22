<template>
    <div class="list-section">
        <HomeSection title="Popular">
          <h4 v-if="loading">Loading...</h4>
          <MangaItem v-for="Creation in AllCreations"
              :key="Creation.id"
              :creation="Creation">
          </MangaItem>
        </HomeSection>
        <HomeSection title="Recommended">
          <MangaItem/>
          <MangaItem/>
          <MangaItem/>
        </HomeSection>
      </div>
</template>

<script>
import HomeSection from "../ui/HomeSection.vue";
import MangaItem from "../ui/MangaItem.vue";
import { ALL_CREATIONS_QUERY } from '../../graphql/fetch_creations'

export default {
  components: {
      HomeSection,
      MangaItem
  },
  data () {
    return {
      AllCreations: [],
      loading: 0
    }
  },
  apollo: {
    AllCreations: {
      query: ALL_CREATIONS_QUERY
    }
  }
}
</script>
<style>
@media screen and (max-width: 1024px) {
  .list-section {
    width: 100%;
    overflow: hidden;
  }
}
</script>
<style>
@media screen and (max-width: 1024px) {
  .list-section {
    width: 100%;
    overflow: hidden;
  }
}
</style>