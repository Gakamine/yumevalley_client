<template>
    <div class="list-section">
        <HomeSection title="Popular">
          <MangaItem/>
          <MangaItem/>
          <MangaItem/>
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

export default {
    components: {
        HomeSection,
        MangaItem
    }
}
</script>