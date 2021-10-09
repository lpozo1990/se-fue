import { createApp } from 'vue';
import App from '@/App.vue';
import routes from './routes';

import './index.css'

createApp(App).use(routes).mount('#app');
