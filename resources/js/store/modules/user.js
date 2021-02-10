import axios from "axios"

export const namespaced = true

export const state = {
    user: null
}

export const mutations = {

    SET_USER_DATA(state, userData) {
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
        axios.defaults.headers.common['Authorization'] = `Bearer ${
            userData.token
        }`
    },

    CLEAR_USER_DATA() {
        localStorage.removeItem('user')
        delete axios.defaults.headers.common['Authorization']
        state.user = null
        location.replace('/')
    },
}

export const actions = {
    registerUser({ commit }, userCredentials) {
        return axios.post('api/user/register', {
            email: userCredentials.email,
            password: userCredentials.password,
        })
        .then(
          ({ data }) => {
            commit('SET_USER_DATA', data)
          }
        )
    },
    loginUser({ commit }, userCredentials) {
        return axios.post('/api/user/login', {
            email: userCredentials.email,
            password: userCredentials.password
        })
        .then(({ data }) => {
            if(data.access_token) {
                commit('SET_USER_DATA', data)
            } else {
                location.replace('/')
            }
        })
    },

    logoutUser({ commit }) {
        commit('CLEAR_USER_DATA')
    },
}

export const getters = {
    loggedIn(state) {
        return !!state.user
    },
}

