/*
 * @Author: your name
 * @Date: 2020-06-22 10:07:52
 * @Description: 登录接口配置
 */ 
import request from '@/axios';

export const apiLogin = (params) => request({
  url: '',
  method: 'post',
  params: {
    ...params
  }
}); 