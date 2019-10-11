<template>
    <section>
        <h1>Login</h1>
        <form class="register-container">
            <input class="input-text" type="email" placeholder="Enter your email" required/>
            <input class="input-text" type="password" placeholder="Enter your password" required/>
            <input class="input-btn" type="submit" value="Login"/>
            <router-link to="/auth/signup">
                <p>...or register instead.</p>
            </router-link>
        </form>
    </section>
</template>
<script>

export default {

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