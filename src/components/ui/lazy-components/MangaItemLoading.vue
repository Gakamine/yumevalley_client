<template>
    <div class="MangaItem">
        <div class="MangaItem__cover"/>
      <div class="MangaItem__name">Loading...</div>
      <div class="MangaItem__details">
        <div class="MangaItem__author">Loading...</div>
        <div class="MangaItem__views">
          Loading...
          <EyeIcon/>
        </div>
      </div>
    </div>
</template>

<script>
import { EyeIcon } from "vue-feather-icons";

export default {
  components: { EyeIcon },
};
</script>

<script>
import { EyeIcon } from "vue-feather-icons";

export default {
  components: { EyeIcon },
  props: ['creation_data']
};
</script>
<style scoped>
@media screen and (min-width: 1024px) {
  .MangaItem__details {
    font-size: 14px;
    width: 185px;
  }
  .MangaItem {
    margin-right: 42px;
  }
}
@media screen and (max-width: 1024px) {
  .MangaItem__details {
    font-size: 10px;
  }
  .MangaItem {
    margin-right: 4px;
    margin-left: 4px;
  }
  .MangaItem__name {
    font-size: 10px;
  }
}
.MangaItem {
  margin-bottom: 10px;
}
.MangaItem__cover {
  background-image: linear-gradient(-128deg, #b9e4fb 0%, #ffe7f9 100%);
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  cursor: pointer;
  transition-duration: 0.15s;
  overflow: hidden;
  position: relative;
}
.MangaItem__cover:after {
  padding-top: 140%;
  display: block;
  content: '';
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
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.MangaItem__details {
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
