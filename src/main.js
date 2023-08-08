import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './assets/tailwind.css'
import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';
axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

const app = createApp(App)

app.use(router)

app.mount('#app')