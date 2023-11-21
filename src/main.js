// main.js (ou main.ts)

import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

axios.defaults.withCredentials = true;

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.mount('#app');
