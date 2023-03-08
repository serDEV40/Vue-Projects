import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/main.css';

const app = createApp(App);
app.component(FontAwesomeIcon,"font-awesome-icon");
app.mount('#app');
