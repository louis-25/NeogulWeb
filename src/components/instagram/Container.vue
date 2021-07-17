<template>
    <div class="container">
        <div v-if="step == 0">            
            <Post :post="postData[i+1]" v-for="(post,i) in postData" :key="post" />
        </div>
        <!--필터 선택 페이지-->        
        <div v-if="step == 1">            
            <div :class="selectFilter" class="upload-image" :style="{ backgroundImage: `url(${uploadImage})`}"></div>
            <div class="filters">            
                <FilterBox :filter="filter" :uploadImage="uploadImage" v-for="filter in filterList" :key="filter">
                    {{filter}}
                </FilterBox>                        
            </div>
        </div>
        <!--글작성 페이지-->
        <div v-if="step == 2">
            <div :class="selectFilter" class="upload-image" :style="{ backgroundImage: `url(${uploadImage})`}"></div>
            <div class="write">
                <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
            </div>
        </div>
    </div>
</template>
<script>
import Post from "./Post.vue"
import FilterBox from './FilterBox.vue'
import {mapState} from 'vuex'

export default {
    components:{
        Post,
        FilterBox,
    },
    props:{        
        // step : Number,
        uploadImage : String
    },    
    computed:{
        ...mapState(['postData', 'step'])
    },
    data() {
        return {
            filterList : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                    "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                    "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
            selectFilter: "",
        }
    },     
    methods: {
        test2(){
            console.log(this.step)
            console.log(this.postData)
            console.log(this.postData[2].content)
        }
    },
    mounted(){
        this.emitter.on('filter', (item)=>{
            this.selectFilter = item;        
        })
    },
}
</script>
<style>
.container{
    background-color: chartreuse;
}
.upload-image{
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>