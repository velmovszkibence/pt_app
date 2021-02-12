require('./bootstrap')

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhoneAlt, faClipboardList, faUserNinja, faDumbbell, faDollarSign, faCheck, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([ faPhoneAlt, faClipboardList, faUserNinja, faDumbbell, faDollarSign,
    faCheck, faFacebookF, faTwitter, faInstagram, faGooglePlusG, faArrowUp ])

Vue.component('font-awesome-icon', FontAwesomeIcon)

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,

    created() {
        const userString = localStorage.getItem('user')
        if(userString) {
          const userData = JSON.parse(userString)
          this.$store.commit('user/SET_USER_DATA', userData)
        }
        axios.interceptors.response.use(
          response => response,
          error => {
            if(error.response.status === 401) {
              this.$store.dispatch('logout')
            }
            return Promise.reject(error)
          }
        )
    },
    render: h => h(App)
}).$mount('#app')
