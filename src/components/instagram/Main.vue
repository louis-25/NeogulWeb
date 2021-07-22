<template>
    <div class="main-app">
    <div class="main-header">
        <!--로그아웃 버튼-->
        <ul class="header-button-left">
            <li @click="logout"><i class="fas fa-sign-out-alt"></i></li>
        </ul>
        <!--글작성 버튼-->
        <ul class="header-button-right">
            <li v-if="step == 0">                                
                <input @change="upload" type="file" id="file" class="inputfile"/>
                <label for="file"><i class="fas fa-pencil-alt"></i></label>                
            </li>
            <li v-if="step == 1"><label @click="this.$store.commit('stepUp')" style="cursor: pointer;">Next</label></li>
            <li v-if="step == 2"><label @click="publish" style="cursor: pointer;">발행</label></li>            
        </ul>        
        <img :src="this.$store.state.firebase.additionalUserInfo.profile.picture" class="main-logo profile-circle" />        
    </div>    
    <button @click="test" class="mt-5">버튼</button>                
    <Container @write="writeText = $event" :imageUrl="imageUrl"/>
</div>
</template>
<script>
import Container from './Container.vue'
import Repository from '../../service/post_repository.js'
import AuthService from '../../service/auth_service.js'
import {mapState, mapMutations} from 'vuex'


const repository = new Repository;
const authService = new AuthService;

export default {    
    components:{
        Container
    },
    computed:{
        ...mapState(['postData', 'step', 'firebase']),
        ...mapMutations(['stepUp', 'stepReset'])
    },
    data(){
        return{                        
            imageUrl:"",
            writeText: "",
            filter: 'perpetua',         
            no: 0,    
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
        this.emitter.on('filter', (a)=>{
            this.filter = a;
        })
        console.log('Main is mounted')
    },
    methods: {
        savePost(){        
            //파이어베이스에 데이터 저장    
            repository.savePost(this.$store.state.firebase.additionalUserInfo.profile.name, this.imsiPost)
        },
        syncPost(){                        
            repository.syncPosts() //파이어베이스 데이터 읽어오기
            
            console.log('postData ',this.postData)                                    
        },     
        test(){                        
            console.log('postData ',this.postData)
            console.log('step ',this.step)
            console.log('writeText ',this.writeText)
            console.log('length ',this.$store.state.postData.length)
            console.log('firebase ',this.$store.state.firebase)
        },
        logout(){
            authService.logout();
            this.$router.push('/');
        },       
        upload(e){
            let file = e.target.files;
            console.log(file[0])
            this.uploadImage = file[0]
            this.imageUrl = URL.createObjectURL(file[0])            
            this.stepUp()
            console.log('step ',this.step)
        },
        async publish(){
            let today = new Date();
            let post = {          
                no:this.$store.state.postData.length,      
                name : this.firebase.additionalUserInfo.profile.name,        
                likes: 45,
                liked: false,
                userImage: this.firebase.additionalUserInfo.profile.picture,
                postImage: this.uploadImage,
                content: this.writeText,
                date: today.toLocaleDateString(),
                filter: this.filter
            };            
            repository.savePost(this.$store.state.firebase.additionalUserInfo.profile.name, post)                        
            this.stepReset()            
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
.profile-circle {          
    margin-bottom: 20px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
}
.inputfile {
    display: none;
}
</style>
