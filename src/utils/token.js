// import Cookies from 'js-cookie'

const KEY = 'token'

export function setToken(token) {
  window.localStorage.setItem(KEY, token)
}

export function getToken() {
  return window.localStorage.getItem(KEY)
}

export function removeToken() {
  return window.localStorage.removeItem(KEY)
}
