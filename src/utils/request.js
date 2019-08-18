import axios from 'axios'
import { Message } from 'element-ui'
// import { MessageBox, Message } from 'element-ui'
// import store from '@/pages/store/index.js'
import { getToken } from '@/utils/auth'

// create an axios instance
axios.create({
  baseURL: '', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
axios.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    config.headers['sessionId'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
axios.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // console.log('data')
    // console.log(res)
    // if the custom code is not 000000, it is judged as an error.
    if (res.response_code !== '000000') {
      Message({
        message: res.response_code_desc || 'error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     // store.dispatch('user/resetToken').then(() => {
      //     //   location.reload()
      //     // })
      //   })
      // }
      return Promise.reject(res.response_code_desc || 'error')
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

/**
 * 封装请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export default function request (args) {
  let method = args.method ? args.method : 'POST'
  let params = args.params ? args.params : { 'msg': '' }
  let url = args.url ? args.url : ''
  let resParams = {
    'msg': JSON.stringify(params.msg)
  }
  switch (method) {
    case 'POST':
      return new Promise((resolve, reject) => {
        axios.post(url, resParams)
          .then(res => {
            let data = res.response_data ? JSON.parse(res.response_data) : {}
            resolve(data)
          }, err => {
            reject(err)
          })
      })
    default:
      return new Promise((resolve, reject) => {
        axios.get(url, {
          params: resParams
        })
          .then(res => {
            let data = res.response_data ? JSON.parse(res.response_data) : {}
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
  }
}
