<template>
  <nav class="NavBar" :class="{ 'navbar--hidden': !showNavbar }">
    <div class="nav-items">
      <logo></logo>
    </div>
    <SearchBar/>
    <div class="nav-items">
      <Account/>
    </div>
  </nav>
</template>

<script>
import Logo from "./Logo";
import Account from "./Account"
import SearchBar from "./SearchBar";

export default {
  name: "NavBar",
  components: {
    Logo,
    SearchBar,
    Account
  },
  data() {
    return {
      showNavbar: true,
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
      if(currentScrollPosition<55) {
        this.showNavbar = true;
      } else {
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
      }
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
      if(currentScrollPosition<55) {
        this.showNavbar = true;
      } else {
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
      }
      this.lastScrollPosition = currentScrollPosition
  }
};
</script>

<style>
.NavBar {
  height: 64px;
  border-bottom: 1px solid #eee;
  padding: 0 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  position: fixed;
  width: 100%;
  height: 64px;
  background-color: white;
  top: 0;
  z-index: 1;
}

@media screen and (min-width: 1024px) {
  .nav-items {
    width: 200px;
  }
}
@media screen and (max-width: 1024px) {
  .nav-items {
    width: 64px;
  }
  .NavBar {
        transition: 0.1s all ease-out;
  }
  .NavBar.navbar--hidden {
    transform: translate3d(0, -100%, 0);
  }
}
</style>
