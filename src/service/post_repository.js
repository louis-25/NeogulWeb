import firebaseApp from './firebase'
// import post from '../assets/postData.js'

class PostRepository {
    syncPosts() {
        const ref = firebaseApp.database().ref('posts')
        ref.on('value', snapshot => {
            const value = snapshot.val()
            console.log(value)
            //value && onUpdate(value)
        })
        return () => ref.off()
    }
    // savePost(userId, post) {
    //     firebaseApp.database().ref(`${userId}/posts/${post.id}`).set(post)
    // }
    savePost(userId, post){
        firebaseApp.database().ref(`${userId}/posts/${post.no}`).set(post)
    }
    removeCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove()
    }
}

export default PostRepository
