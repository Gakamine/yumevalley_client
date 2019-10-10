<template>
    <section id="acc-navbar">
        <div ref="account-container" v-on:click="showDropdown = !showDropdown" class="account-container">
            <UserIcon/>
        </div>
        <transition name="fade">
            <div v-show="showDropdown" v-closable="{
            handler: 'onClose',
            exclude: ['account-container']
            }" class="dropdown-acc">
                <router-link  v-on:click="showDropdown = false" class="drop-item" to="/auth/signin">Login</router-link>
                <router-link   v-on:click="showDropdown = false" class="drop-item" to="/auth/signup">Register</router-link>
                <switches  class="drop-item" style="float:right" label="Darkmode" v-model="darkmode"></switches>
            </div>
        </transition>
    </section>
</template>

<script>
import { UserIcon } from "vue-feather-icons";
import Switches from 'vue-switches';
export default {
    components: {
        UserIcon,
        Switches
    },
    data() {
        return {
            showDropdown: false,
            darkmode: false
        }
    },
    methods: {
        onClose () {
          this.showDropdown = false
        }
    }
}
</script>
<style>
.account-container {
    float: right;
    background-color: #f5f5f5;
    padding: 5px;
    border-radius: 100%;
    cursor: pointer;
}

.account-container a {
    color: black !important;
}

.dropdown-acc {
    background-color: white;
    border: 1px solid #f4f4f4;
    border-radius: 6px;
    top: 70px;
    width: 150px;
    right: 10px;
    position: absolute;
    box-shadow: 5px 5px 15px rgba(0,0,0,.1);
    overflow: hidden;
}

.drop-item {
    padding: 10px 20px;
    width: 100%;
    font-size: 12px;
    display: block;
    border-bottom: 1px solid #e5e5e5;
}
.fade-enter-active, .fade-leave-active {
      transition: all 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.vue-switcher__label {
    margin-bottom: 5px !important;
    margin-right: 15px !important;
    color: #737373;
    float: left;
    font-size: 12px;
    cursor: pointer;
    margin-bottom: 0 !important;
}
.vue-switcher__label:hover {
    color: black;
}
</style>