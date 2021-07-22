import { Vue } from 'vue'

//error.js
Vue.config.errorHandler = e => {
  console.error(e.message)
  console.log("ERROR!")
}