<template lang="">    
    <div class="content">
        <div class="title">
            <h4>너굴웹</h4>
            <p>Vue를 연습하는 공간</p>
        </div>
        <Login class="Login"/>
    </div>
</template>
<script>
import Login from './Login.vue'

export default {
    name:"Home",
    components:{
        Login
    }
}
</script>
<style>
.title {
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
}

.content {    
    display: flex;
    flex-direction: column;
    justify-content: center;        
}

.Login{
    margin: auto;
}
    
</style>