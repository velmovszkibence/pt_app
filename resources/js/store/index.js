import Vue from 'vue'
import Vuex from 'vuex'

import * as user from './modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user
    }
})
