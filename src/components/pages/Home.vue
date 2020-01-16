<template>
    <div class="list-section">
        <HomeSection title="Popular">
          <CreationItemLoading v-if="loading"  />
          <CreationItemLoading v-if="loading"  />
          <CreationItemLoading v-if="loading"  />
          <CreationItemLoading v-if="loading"  />
          <CreationItem v-for="Creation in creation"
              :key="Creation.id"
              :creation_data="Creation">
          </CreationItem>
        </HomeSection>
        <HomeSection title="Recommended">
          <CreationItemLoading v-if="loading"  />
          <CreationItemLoading v-if="loading"  />
          <CreationItemLoading v-if="loading"  />
          <CreationItemLoading v-if="loading"  />
          <CreationItem v-for="Creation in creation"
              :key="Creation.id"
              :creation_data="Creation">
          </CreationItem>
        </HomeSection>
      </div>
</template>

<script>
import HomeSection from "../ui/HomeSection.vue";
import CreationItem from "../ui/CreationItem.vue";
import CreationItemLoading from "../ui/lazy-components/CreationItemLoading.vue";
import { ALL_CREATIONS_QUERY } from '../../graphql/fetch_creations'

export default {
  components: {
      HomeSection,
      CreationItem,
      CreationItemLoading
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
</style>