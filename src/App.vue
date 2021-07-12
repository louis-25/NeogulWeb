<template>  
  <!-- <router-link to="/">Home</router-link>
  <router-link to="/list">List</router-link>
  <router-link to="/Login">Login</router-link>    
  <button @click="GoogleLogin">Login</button> -->
  <router-view></router-view>
</template>

<script>

export default {  
  name: 'App',
  components: {

  },
  methods:{
        
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
  background-color: #adb5bd;  
}
body{
  margin: 0;
}

html {
  background-color: beige;
}
</style>
