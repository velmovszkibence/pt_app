require('./bootstrap');

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add([faPhoneAlt, faFacebookF, faTwitter, faInstagram, faGooglePlusG]);

window.Vue = require('vue').default;

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('home-page', require('./components/HomePage.vue').default);

Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
});
