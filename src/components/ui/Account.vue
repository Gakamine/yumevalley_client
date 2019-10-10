<template>
    <section class="account-container">
        <router-link class="account-btn-mobile" to="/auth/signin">
            <LogInIcon/>
        </router-link>
        <router-link class="account-btn-pc" to="/auth/signin">
            Sign in |
        </router-link>
        <router-link class="account-btn-pc" to="/auth/signup">
             Sign up
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
.account-btn-pc, .account-btn-pc:hover,.account-btn-mobile,.account-btn-mobile:hover {
    color: black;
}
@media screen and (max-width: 1024px) {
    .account-btn-pc {
        display: none;
    }
}
@media screen and (min-width: 1024px) {
    .account-btn-mobile {
        display: none;
    }
}
</style>