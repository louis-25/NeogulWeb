<template>
    <div class="login-box">
        <div class="circle">
            <img class="logo" src="../assets/rakun.png" alt="너굴맨" />
        </div>
        <button @click="GoogleLogin" type="button" class="btn btn-primary">
            <i class="fab fa-google" style="margin-right: 10px;"></i> Login
        </button>
    </div>
</template>
<script>
import AuthService from '../service/auth_service.js'

export default {
    name: 'Login',
    methods: {
        GoogleLogin() {
            const authService = new AuthService
            authService.login('Google').then(data => {
                console.log(data)
                this.$router.push('/detail')
            })
        },
    },
}
</script>
<style>
div {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
}

.login-box {
    width: 350px;
    background-color: rgba(var(--d87, 255, 255, 255), 1);
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius: 5px;
    margin-top: 10%;
    padding: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.logo {
    height: 148px;
    margin: auto;
}

.circle {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
}

.login-button {
    margin-top: 20px;
}
</style>
