require('./bootstrap');

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt, faClipboardList, faUserNinja, faDumbbell, faDollarSign, faCheck} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add([ faPhoneAlt, faClipboardList, faUserNinja, faDumbbell, faDollarSign,
            faCheck, faFacebookF, faTwitter, faInstagram, faGooglePlusG ]);

window.Vue = require('vue').default;

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('home-page', require('./components/front-page/HomePage.vue').default);

Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
});
