import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { message } from './message.rs'

console.log(message);

createApp(App).mount('#app')
