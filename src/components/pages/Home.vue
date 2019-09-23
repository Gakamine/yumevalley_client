<template>
    <div class="list-section">
        <HomeSection title="Popular">
          <div v-if="loading" class="loading">
              <MangaItemLoading v-for="load in 4"
                :key="load"
              />
          </div>
          <MangaItem v-for="Creation in creation"
              :key="Creation.id"
              :creation_data="Creation">
          </MangaItem>
        </HomeSection>
        <HomeSection title="Recommended">
          <div class="loading" v-if="loading">
            <MangaItemLoading v-for="load in 4"
              :key="load"
            />
          </div>
          <MangaItem v-for="Creation in creation"
              :key="Creation.id"
              :creation_data="Creation">
          </MangaItem>
        </HomeSection>
      </div>
</template>

<script>
import HomeSection from "../ui/HomeSection.vue";
import MangaItem from "../ui/MangaItem.vue";
import MangaItemLoading from "../ui/MangaItemLoading.vue";
import { ALL_CREATIONS_QUERY } from '../../graphql/fetch_creations'

export default {
  components: {
      HomeSection,
      MangaItem,
      MangaItemLoading
  },
  data () {
    return {
      creation: [],
      loading: 0
    }
  },
  apollo: {
    creation: {
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
.loading {
  display: flex;
}
</style>