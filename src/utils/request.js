import axios from 'axios'
import { getToken } from '@/utils/token'

// create an axios instance
const service = axios.create({
  baseURL: 'http://192.168.0.102:8081/',
  timeout: 3000
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken()
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

export function deleteRequest(url, data) {
  return service({
    method: 'DELETE',
    url: url,
    data: data
  })
}

