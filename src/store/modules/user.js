import {getRequest, postRequest} from '@/utils/request'
import {getToken, setToken, removeToken} from '@/utils/token'

const state = {
  token: getToken(),
  id: null,
  name: null
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },

  SET_ID: (state, id) => {
    state.id = id
  },

  SET_NAME: (state, name) => {
    state.name = name
  }
}

const actions = {
  // user login
  login({commit}, loginForm) {
    const {username, password} = loginForm
    return new Promise((resolve, reject) => {
      postRequest('/login', {
        username: username.trim(),
        password: password.trim()
      }).then(res => {
        if (res.data.code === 0) {
          const token = res.data.data
          commit('SET_TOKEN', token)
          setToken(token)
          resolve()
        } else {
          reject(res.data.message)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },

  // user logout
  logout({commit, state}) {
    return new Promise((resolve, reject) => {
      commit("SET_ID", null)
      commit("SET_NAME", null)
      commit('SET_TOKEN', "")
      removeToken()
      resolve('logout success')
    })
  },

  // user info
  info({commit, state}) {
    return new Promise((resolve, reject) => {
      getRequest("/user/info").then(res => {
        commit("SET_ID", res.data.data.id)
        commit("SET_NAME", res.data.data.sub)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}