<template>
    <div class="MangaItem">
      <router-link :to="'media/' + creation_data.id">
        <div class="MangaItem__cover">
          <img :src="creation_data.coverUrl"/>
        </div>
        <div class="MangaItem__name">{{ creation_data.title }}</div>
      </router-link>
      <div class="MangaItem__details">
        <router-link :to="'/user/'+ creation_data.user.username">
          <div class="MangaItem__author">{{ creation_data.user.username }}</div>
        </router-link>
        <div class="MangaItem__views">
          12.4K
          <EyeIcon/>
        </div>
      </div>
    </div>
</template>

<script>
import { EyeIcon } from "vue-feather-icons";

export default {
  components: { EyeIcon },
  props: ['creation_data']
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .MangaItem__cover {
    height: 265px;
    width: 185px;
  }
  .MangaItem__details {
    font-size: 14px;
  }
  .MangaItem {
    margin-right: 42px;
  }
}
@media screen and (max-width: 1024px) {
  .MangaItem__cover {
    height: 216px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .MangaItem__details {
    font-size: 10px;
  }
  .MangaItem {
    margin-right: 10px;
    margin-left: 10px;
  }
}
.MangaItem {
  margin-bottom: 20px;
}
.MangaItem__cover {
  background-image: linear-gradient(-128deg, #b9e4fb 0%, #ffe7f9 100%);
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  cursor: pointer;
  transition-duration: 0.15s;
  overflow: hidden;
}
.MangaItem__cover:hover {
  transform: scale(1.01) translateY(-1px);
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.06);
}
.MangaItem__cover:active {
  transform: none;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.03);
}
.MangaItem__cover img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.MangaItem__name {
  margin-top: 15px;
  color: #444;
}
.MangaItem__details {
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #666666;
}
.MangaItem__views {
  display: flex;
  align-items: center;
}
.MangaItem__views svg {
  margin-left: 6px;
  height: 16px;
  width: 16px;
}
.MangaItem__author {
  text-decoration: none;
  color: #444;
}
</style>
