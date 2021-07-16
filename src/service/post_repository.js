import firebaseApp from './firebase'
import store from '../store.js'
// import post from '../assets/postData.js'

class PostRepository {    
    syncPosts() {
        const ref = firebaseApp.database().ref('posts')
        let value
        ref.on('value', snapshot => {
            value = snapshot.val()
            console.log(value)               
            value && store.commit('postData', value)
            // this.$store.state.postData = value;
        })               
        return () => ref.off()
    }
    savePost(userId, post){
        firebaseApp.database().ref(`user/${userId}/posts/${post.no}`).set(post)
        firebaseApp.database().ref(`posts/${post.no}`).set(post)
    }
    removeCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove()
    }
}

export default PostRepository
