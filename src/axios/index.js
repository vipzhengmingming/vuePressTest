/*
 * @Author: your name
 * @Date: 2020-06-22 10:07:52
 * @Description: 全局请求配置
 */ 

import Axios from 'axios';                              // 引入axios数据请求模块
import router from '@/router/index';                     // 引入项目路由文件
import { getToken, removeToken } from '@/utils/common/auth'

let codes = [200,400,511,521,523] // 无需toast提示 
// 错误处理
const error_handle = (error) => {
    //如果是401则跳转到登录页面
    // if (error.response.status === 401) {
    //     if (getToken()) {
    //         removeToken()
    //     }
    //     router.push({ path: "/" });
    // }
    // let message = error.response.data.message || error.response.data.msg || error.response.data.error_description || '未知错误'
    // if (!codes.includes(error.response.status)) {
    //     return Promise.reject(message)
    // }
    return Promise.reject(message)
    // 通过返回的状态码对错误进行处理
}

// Axios全局配置
Axios.defaults.timeout = 30 * 1000;                         // 请求的过期时间30秒
Axios.defaults.headers.post['Content-Type'] = 'application/json'
Axios.defaults.headers.post['Accept'] = 'application/json'

// http request 请求拦截器
Axios.interceptors.request.use(config => {
    // 设置请求头
    // config.withCredentials = true // 允许在请求头中携带token ,这个是解决跨域产生的相关问题
    // config.headers['access-token']: '' // 设置请求头中的access-token
    return config;
}, error => {
    return Promise.reject(error);
});

// http response 响应拦截器
Axios.interceptors.response.use(response => {
    //const status = response.data.code || 200;
    // const message = response.data.message || response.data.msg || response.data.error_description || '未知错误';
    // //如果是401则跳转到登录页面
    // if (status === 401) {
    //     if (getToken()) {
    //         removeToken()
    //     }
    //     router.push({ path: "/" });
    // }
    // // 如果请求为非200否者默认统一处理
    // if (!codes.includes(status)) {
    //     return Promise.reject(message)
    // }
    return response;
}, error => {
    error_handle(error);
    return Promise.reject(error);
});
export function axiosPost (url = "", param = {}, config = {}){
   return Axios.post(url, param, config);
}
export default Axios;