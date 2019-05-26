<template>
  <div class="SideMenu">
    <SideMenuItem name="Home">
      <HomeIcon/>
    </SideMenuItem>
    <SideMenuItem name="Discover">
      <CompassIcon/>
    </SideMenuItem>
    <SideMenuItem name="Following">
      <ListIcon/>
    </SideMenuItem>
    <SideMenuItem name="Translate">
      <FlagIcon/>
    </SideMenuItem>
    <SideMenuItem name="Profile">
      <UserIcon/>
    </SideMenuItem>
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
</style>
