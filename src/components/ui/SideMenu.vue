<template>
  <div class="SideMenu">
    <router-link to="/" exact>
      <SideMenuItem name="Home">
        <HomeIcon/>
      </SideMenuItem>
    </router-link>
    <router-link to="/discover">
      <SideMenuItem name="Discover">
        <CompassIcon/>
      </SideMenuItem>
    </router-link>
    <router-link to="/following">
      <SideMenuItem name="Following">
        <BookmarkIcon/>
      </SideMenuItem>
    </router-link>
    <router-link to="/translate">
      <SideMenuItem name="Translate">
        <FlagIcon/>
      </SideMenuItem>
    </router-link>
    <router-link to="/user">
      <SideMenuItem name="Profile">
        <UserIcon/>
      </SideMenuItem>
    </router-link>
  </div>
</template>

<script>
import {
  HomeIcon,
  CompassIcon,
  BookmarkIcon,
  FlagIcon,
  UserIcon
} from "vue-feather-icons";
import SideMenuItem from "./SideMenuItem.vue";

export default {
  components: {
    SideMenuItem,
    HomeIcon,
    CompassIcon,
    BookmarkIcon,
    FlagIcon,
    UserIcon
  }
};
</script>

<style>
@media screen and (min-width: 1024px) {
  .SideMenu {
    display: flex;
    flex-direction: column;
    width: 230px;
    position: fixed;
  }
}

@media screen and (max-width: 1024px) {
  .SideMenu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    position: fixed;
    bottom: 0px;
    background-color: white;
    z-index: 1;
    border-top: 1px solid #eee;
    min-height: 40px;
  }

  .SideMenu a:nth-child(4),.SideMenu a:nth-child(5) {
    display: none;
  }
}

.SideMenu a {
  text-decoration: none;
  color: black;
}

.router-link-active .SideMenuItem {
    background-color: #f1f1f1;
}
</style>
