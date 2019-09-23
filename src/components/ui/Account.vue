<template>
    <section class="account-container">
        <router-link class="account-btn" to="/authentification">
            <div>Sign in | Sign up</div>
            <LogInIcon/>
        </router-link>
    </section>
</template>
<script>
import { LogInIcon } from "vue-feather-icons";
export default {
    components: {
        LogInIcon
    }
}
</script>
<style>
.account-container {
    float: right;
}
.account-btn, .account-btn:hover {
    color: black;
}
@media screen and (max-width: 1024px) {
    .account-btn > div {
        display: none;
    }
}
@media screen and (min-width: 1024px) {
    .account-btn > .feather-log-in {
        display: none;
    }
}
</style>