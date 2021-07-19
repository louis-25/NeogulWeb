import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            firebase: Object,
            postData: Object,
            step: 0,
            filter:"",            
        }
    },
    mutations : {    
        setMore(state, data){
            state.more = data
        },    
        like(state){
            if(state.likecheck==0) {
                state.like++
                state.likecheck = 1
            }
            else {
                state.like--
                state.likecheck = 0
            }
        },
        postData(state, data){
            state.postData = data
            console.log('postData변경')
            console.log('변경된 postData',state.postData);
        },
        stepUp(state) {
            state.step++;
        },
        stepReset(state) {
            state.step = 0;
        }
    },
    actions : { // ajax를 요청하는곳
        getData(context){
            axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((a)=>{                
                context.commit('setMore', a.data)
            })
        }

    }
    
})

export default store
