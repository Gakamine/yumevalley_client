<template>
  <div class="SideMenu">
    <router-link to="./">
      <SideMenuItem name="Home">
        <HomeIcon/>
      </SideMenuItem>
    </router-link>
    <router-link to="./404">
      <SideMenuItem name="Discover">
        <CompassIcon/>
      </SideMenuItem>
    </router-link>
    <router-link to="./404">
      <SideMenuItem name="Following">
        <ListIcon/>
      </SideMenuItem>
    </router-link>
    <router-link to="./404">
      <SideMenuItem name="Translate">
        <FlagIcon/>
      </SideMenuItem>
    </router-link>
    <router-link>
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
</style>
