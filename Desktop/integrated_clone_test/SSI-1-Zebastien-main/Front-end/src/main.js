import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { QuillEditor } from '@vueup/vue-quill'
// import { argon2id } from 'argon2'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()
// app.use(argon2id)
app.use(router)
app.mount('#app')
app.use(pinia)
app.component('QuillEditor', QuillEditor)
