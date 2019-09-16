import axios from 'axios'
import qs from 'qs'

const baseUrl = 'http://localhost:5000';
axios.defaults.withCredentials=true;  // axios 请求带cookie

import {getCookie} from "../util/cookie";

// 上传图片接口
export const uploadUrl = `${baseUrl}/upload`;


axios.interceptors.request.use(config => {
  return config
})

axios.interceptors.response.use(data => {
  if(data.code == 1 || data.code == 2 || data.code == 3 || data.code == 4){
    return data
  }

  // code 488重新登录
  if(data.code == 488){
    location.href = '/login'
  }

})

export const GET = (url, params) => {
  return axios.get(`${baseUrl}${url}`, {params}).then(res => {
    return res.data
  }).catch(err => {
    throw err
  })
}

export const POST = (url, params) => {
  return axios.post(`${baseUrl}${url}`, params).then(res => {
    return res.data
  }).catch(err => {
    throw err
  })
}

export const POSTFORM = (url, params) => {
  return axios({
    method: 'post',
    url: `${baseUrl}${url}`,
    data: qs.stringify(params),
    headers: {
      'Content-Type': 'application/x-www-urlencoded'
    }
  }).then(res => {
    return res.data
  }).catch(err => {
    throw err
  })
}


export const POSTFORMDATA = (url, params) => {
  return axios({
    method: 'post',
    url: `${baseUrl}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/form-data'
    }
  }).then(res => {
    return res.data
  }).catch(err => {
    throw err
  })
}


export const POSTJSON = (url, params) => {
  return axios({
    method: 'post',
    url: `${baseUrl}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data
  }).catch(err => {
    throw err
  })
}
