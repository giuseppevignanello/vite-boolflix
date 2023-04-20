import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
library.add(faStar, farStar);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
