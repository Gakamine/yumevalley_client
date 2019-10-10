<template>
    <section>
        <h1>Register</h1>
        <form class="register-container">
            <input class="input-text" type="email" placeholder="Enter your email" required/>
            <input class="input-text" type="text" placeholder="Enter your username" required/>
            <input class="input-text" type="password" placeholder="Enter your password" required/>
            <input class="input-text" type="password" placeholder="Confirm your password" required/>
            <label class="input-checkbox">I am a creator.
                <input type="checkbox"/>
                <span class="checkmark"></span>
            </label>
            <p>By signing up you indicate that you have read and agree to the <router-link to="/terms"> terms of Service and Privacy Policy.</router-link></p>
            <input  class="input-btn" type="submit" value="Register"/>
            <router-link to="/auth/signin">
                <p>...or login instead.</p>
            </router-link>
        </form>
    </section>
</template>
<script>
import { USER_REGISTER_MUTATION } from '../../graphql/register_user'

export default {
 data () {
      return {
        username: '',
        password: '',
        email: '',
        creator: false,
      }
    },
    methods: {
      registerUser () {
        const { username, password, email, creator } = this.$data
        this.$apollo.mutate({
            mutation: USER_REGISTER_MUTATION,
            variables: {
                username,
                password,
                email,
                creator
            }
        })
      }
    }
}
</script>
<style>
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