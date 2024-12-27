import axios from 'axios'
import { getToken } from '@/utils/token'

const service = axios.create({
  // baseURL: 'http://localhost:8081/',
  baseURL: '/api',
  timeout: 3000
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export function getRequest(url, params) {
  return service({
    method: 'GET',
    url: url,
    params: params
  })
}

export function postRequest(url, data) {
  return service({
    method: 'POST',
    url: url,
    data: data
  })
}

export function putRequest(url, data) {
  return service({
    method: 'PUT',
    url: url,
    data: data
  })
}

export function deleteRequest(url, data) {
  return service({
    method: 'DELETE',
    url: url,
    data: data
  })
}