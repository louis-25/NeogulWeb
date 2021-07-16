<template>
    <div class="main-app">
    <div class="main-header">
        <!--로그아웃 버튼-->
        <ul class="header-button-left">
            <li @click="logout"><i class="fas fa-sign-out-alt"></i></li>
        </ul>
        <!--글작성 버튼-->
        <ul class="header-button-right">
            <li>                
                <div v-if="step == 0">
                    <input @change="upload" type="file" id="file" class="inputfile"/>
                    <label for="file"><i class="fas fa-pencil-alt"></i></label>
                </div>
                <label v-if="step == 1" @click="step=2" style="cursor: pointer;">Next</label>                
                <label v-if="step == 2" @click="publish" style="cursor: pointer;">발행</label>
            </li>
        </ul>        
        <img :src="this.$store.state.firebase.additionalUserInfo.profile.picture" class="main-logo rakun-circle" />        
    </div>

    <button @click="savePost" class="main-button mt-5">버튼</button>
    <button @click="syncPost" class="main-button mt-5">synctest</button>
    <button @click="test" class="main-button mt-5">test</button>
    <Container @write="작성한글 = $evnet" :step="step" :uploadImage="uploadImage" :postData="postData"/>    
</div>
</template>
<script>
import Container from './Container.vue'
import Repository from '../../service/post_repository.js'
import AuthService from '../../service/auth_service.js'
import {mapState} from 'vuex'

const repository = new Repository;
const authService = new AuthService;

export default {    
    components:{
        Container
    },
    computed:{
        ...mapState(['postData'])
    },
    data(){
        return{
            step : 0,
            uploadImage:"",
            작성한글: "",
            filter: 'perpetua',             
            imsiPost: {
                no : 2,
                name : 'donghyeon2',        
                likes: 43,
                liked: false,
                userImage: "https://placeimg.com/100/100/arch",
                postImage: "https://placeimg.com/640/480/arch",
                content: "임시 내용1",
                date: "May 15",
                filter: "perpetua"
            }
        }
    },
    mounted() {
        this.syncPost()             
    },
    methods: {
        savePost(){            
            repository.savePost(this.$store.state.firebase.additionalUserInfo.profile.name, this.imsiPost)
        },
        syncPost(){                        
            repository.syncPosts()            
            // this.postData = posts            
            console.log('postData ',this.postData)
            
            // console.log('posts ',posts)
            // for(let post in posts ){
            //     console.log(`${post}`)
            // }
            
        },     
        test(){            
            console.log('postData ',this.$store.state.postData[1].content)
            console.log('postData ',this.$store.state.postData[2].no)
            console.log('postData ',this.postData[1].userImage)
        },
        logout(){
            authService.logout();
            this.$router.push('/');
        },       
        upload(e){
            let file = e.target.files;
            console.log(file[0])
            this.uploadImage = URL.createObjectURL(file[0])
            this.step = 1;
        },
        publish(){
            let today = new Date();
            let post = {
                name : this.$store.state.firebase.additionalUserInfo.profile.name,        
                likes: 45,
                liked: false,
                userImage: this.$store.state.firebase.additionalUserInfo.profile.picture,
                postImage: this.uploadImage,
                content: this.작성한글,
                date: today.toLocaleDateString,
                filter: this.filter
            };
            repository.savePost(this.$store.state.firebase.additionalUserInfo.profile.name, post)
            this.postData.unshift(post);
            this.step = 0;
        },                
    },
}
</script>
<style>
ul {
    padding: 5px;    
    list-style-type: none;
}
.main-header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;    
    display: flex;
    justify-content: space-between;
    top: 0;
    z-index: 2;
}
.header-button-left {
    color: crimson;    
    width: 50px;
    padding-left: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    margin-top: 10px;    
}

.header-button-right {    
    color: mediumseagreen;    
    width: 50px;
    cursor: pointer;
    padding-left: 0;
    margin-top: 10px;
}
.main-logo {
    width: 50px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
}
.sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
}
.inputfile {
    display: none;
}
.input-plus {
    cursor: pointer;    
}
.main-app {
    box-sizing: border-box;
    font-family: 'consolas';
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}
.rakun-circle {          
    margin-bottom: 20px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
}
.inputfile {
    display: none;
}
</style>
