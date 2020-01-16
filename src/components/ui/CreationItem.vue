<template>
    <div class="CreationItem">
      <router-link class="creation-link" :to="'media/' + creation_data.url">
        <div class="CreationItem__cover">
          <img :src="creation_data.coverUrl"/>
        </div>
        <div class="CreationItem__name">{{ creation_data.title }}</div>
      </router-link>
      <div class="CreationItem__details">
        <router-link :to="'/user/'+ creation_data.user.username">
          <div class="CreationItem__author">{{ creation_data.user.username }}</div>
        </router-link>
        <div class="CreationItem__views">
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
  .CreationItem__details {
    font-size: 14px;
    width: 185px;
  }
  .CreationItem {
    margin-right: 42px;
  }
}
@media screen and (max-width: 1024px) {
  .CreationItem__details {
    font-size: 10px;
  }
  .CreationItem {
    margin-right: 4px;
    margin-left: 4px;
  }
  .CreationItem__name {
    font-size: 10px;
  }
}
.CreationItem {
  margin-bottom: 10px;
}
.CreationItem__cover {
  background-image: linear-gradient(-128deg, #b9e4fb 0%, #ffe7f9 100%);
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  cursor: pointer;
  transition-duration: 0.15s;
  overflow: hidden;
  position: relative;
}
.CreationItem__cover:after {
  padding-top: 140%;
  display: block;
  content: '';
}
.CreationItem__cover:hover {
  transform: scale(1.01) translateY(-1px);
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.06);
}
.CreationItem__cover:active {
  transform: none;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.03);
}
.CreationItem__cover img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.CreationItem__details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #666666;
}
.CreationItem__views {
  display: flex;
  align-items: center;
}
.CreationItem__views svg {
  margin-left: 6px;
  height: 16px;
  width: 16px;
}
.CreationItem__author, .CreationItem__details, .CreationItem__name {
  text-decoration: none;
  color: #444;
}
.CreationItem .creation-link {
  outline: none;
}
.CreationItem a:focus > .CreationItem__cover {
  transform: scale(1.01) translateY(-1px);
  box-shadow: 14px 4px 14px 0 rgba(0, 0, 0, 0.03);
}
</style>
