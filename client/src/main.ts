import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import App from './App.vue';
import router from './router/routes';
import 'quasar/src/css/index.sass';
import '@quasar/extras/material-icons/material-icons.css';
const app = createApp(App);
const pinia = createPinia();

try {
  app.use(Quasar, {
    plugins: {},
  });
  app.use(pinia);
  app.use(router);
  app.mount('#app');
} catch (error) {
  console.error('Error decoding token:', error);
  alert('Please log in');
}
