import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            firebase: Object,
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
