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
        <ListIcon/>
      </SideMenuItem>
    </router-link>
    <router-link to="/translate">
      <SideMenuItem name="Translate">
        <FlagIcon/>
      </SideMenuItem>
    </router-link>
    <router-link to="/profile">
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
  ListIcon,
  FlagIcon,
  UserIcon
} from "vue-feather-icons";
import SideMenuItem from "./SideMenuItem.vue";

export default {
  components: {
    SideMenuItem,
    HomeIcon,
    CompassIcon,
    ListIcon,
    FlagIcon,
    UserIcon
  }
};
</script>

<style>
.SideMenu {
  display: flex;
  flex-direction: column;
  width: 230px;
}

.SideMenu a {
  text-decoration: none;
  color: black;
}

.router-link-active .SideMenuItem {
    background-color: #f9f9f9;
}
</style>
