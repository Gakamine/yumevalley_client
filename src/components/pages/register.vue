<template>
    <section>
        <h1>Register</h1>
        <div class="register-container">
            <TextInput  v-model="username" placeholder="Enter your username"/>
            <EmailInput v-model="email" placeholder="Enter your email"/>
            <PasswordInput v-model="password" placeholder="Enter your password"/>
            <PasswordInput placeholder="Confirm your password"/>
            <Checkbox v-model="creator" placeholder="I am a creator."/>
            <p>By signing up you indicate that you have read and agree to the <router-link to="/terms"> terms of Service and Privacy Policy.</router-link></p>
            <div class="forms-buttons">
                <router-link to="/auth/signin">
                    <Button placeholder="Login"/>
                </router-link>
                <button @click="registerUser()">Register</button>
            </div>
        </div>
    </section>
</template>
<script>
import { USER_REGISTER_MUTATION } from '../../graphql/register_user'
import TextInput from "../ui/forms/text_input.vue";
import PasswordInput from "../ui/forms/password_input.vue";
import EmailInput from "../ui/forms/email_input.vue";
import Button from "../ui/forms/button.vue";
import Checkbox from "../ui/forms/checkbox.vue";

export default {
    components: {
        TextInput,
        PasswordInput,
        EmailInput,
        Button,
        Checkbox
    }, data () {
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

.forms-buttons {
    display: grid;
    grid-template-columns: 1fr 2fr;
}
</style>