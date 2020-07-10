/*
 * @Author: your name
 * @Date: 2020-06-22 10:07:52
 * @Description: 档案详情
 */ 
import  { axiosPost } from '@/axios';

export const apiFileDetails = (params) => axiosPost("/isc/manage/para/list",params).then( resp => resp.data); 