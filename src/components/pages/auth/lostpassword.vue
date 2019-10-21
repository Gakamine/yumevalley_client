<template>
    <section>
        <h1>Reset password</h1>
        <form class="register-container">
            <input class="input-text" name="email" type="email" placeholder="Enter your email" required/>
            <input v-on:click="userSendResetPassword" class="input-btn" type="button" value="Reset password"/>
            <router-link to="/auth/signin">
                <p>...remember your password ? login.</p>
            </router-link>
        </form>
    </section>
</template>
<script>
import { RESET_PASSWORD_MUTATION } from '../../../graphql/reset_password'
export default {
 data () {
      return {
        email: '',
      }
    },
    methods: {
      userSendResetPassword () {
        const { email } = this.$data
        this.$apollo.mutate({
            mutation: RESET_PASSWORD_MUTATION,
            variables: {
                email
            }
        })
      }
    }
}
</script>
<style>
.register-form * {
    width: 100%;
}
.register-container {
    display: block;
    width: 80%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}

p {
    padding-left: 5px;
}
</style>