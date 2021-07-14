<template>
    <div class="container">
        <Post/>
        <Post/>
        <Post/>
    </div>
</template>
<script>
import Post from "./Post.vue"

export default {
    components:{
        Post
    }
}
</script>
<style>
    .container{
        background-color: chartreuse;
    }
</style>