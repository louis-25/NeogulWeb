<template>
    <div class="login-box">
        <div class="circle">
            <img class="rakun" src="../assets/rakun.png" alt="너굴맨" />
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
                this.$store.state.firebase = data
                console.log(data)
                this.$router.push('/main')
            })
        },
    },
}
</script>
<style>

.login-box {
    width: 350px;
    background-color: rgba(var(--d87, 255, 255, 255), 1);
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius: 5px;
    margin-top: 10%;
    margin: 10% auto 0;
    padding: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.rakun {
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
