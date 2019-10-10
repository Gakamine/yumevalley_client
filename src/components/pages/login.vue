<template>
    <section>
        <h1>Login</h1>
        <div class="register-container">
            <TextInput placeholder="Enter your username"/>
            <PasswordInput placeholder="Enter your password"/>
            <router-link to="/auth/signup">
                <Button placeholder="Register"/>
            </router-link>
        </div>
    </section>
</template>
<script>
import TextInput from "../ui/forms/text_input.vue";
import PasswordInput from "../ui/forms/password_input.vue";
import Button from "../ui/forms/button.vue";

export default {
    components: {
        TextInput,
        PasswordInput,
        Button
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
</style>