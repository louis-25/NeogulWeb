<template>  
  <router-link to="/">Home</router-link>
  <router-link to="/list">List</router-link>    
  <button @click="GoogleLogin">Login</button>
  <router-view></router-view>
</template>

<script>
import AuthService from './service/auth_service.js'

const authService = new AuthService

export default {  
  name: 'App',
  components: {

  },
  methods:{
    GoogleLogin(){      
      authService.login("Google").then(data => {
        console.log(data)        
      })
    },    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
