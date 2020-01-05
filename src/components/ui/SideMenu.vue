<template>
  <div class="SideMenu" :class="{ 'sidemenu--hidden': !showSidemenu }">
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
  },
  data() {
    return {
      showSidemenu: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }    // Here we determine whether we need to show or hide the navbar
      this.showSidemenu = currentScrollPosition < this.lastScrollPosition    // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition
    }
  },
  onScroll () {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    if (currentScrollPosition < 0) {
      return
    }  // Stop executing this function if the difference between
    // current scroll position and last scroll position is less than some offset
    if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
      return
    }
    this.showSidemenu = currentScrollPosition < this.lastScrollPosition
    this.lastScrollPosition = currentScrollPosition
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
    min-height: 60px;
    transition: 0.1s all ease-out;
  }

  .SideMenu a:nth-child(4),.SideMenu a:nth-child(5) {
    display: none;
  }

  .SideMenu.sidemenu--hidden {
    transform: translate3d(0, 100%, 0);
  }
}

.SideMenu a {
  text-decoration: none;
  color: black;
}

.router-link-active .SideMenuItem {
    background-color: #f9f9f9;
}
</style>
