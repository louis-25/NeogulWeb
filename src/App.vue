<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data(){
    return {
      auth : this.$store.state.firebase
    }
  },
  methods:{
    
  },  
  watch:{
    auth(firebase){
      console.log('auth: ',firebase)
      if (!firebase) {
        this.$router.push('/login')
      }
    }
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

div {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;    
}

body{
  margin: 0;
}

html {
  background-color: beige;
}
</style>
