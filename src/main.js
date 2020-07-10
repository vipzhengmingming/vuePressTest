/*
 * @Description: 入口文件
 * @Author: zmm
 * @Date: 2020-03-11 17:00:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-22 15:31:34
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from "@/mixins/mixin"
import '@/utils/rem/rem'  // 开启rem适配
import '@/assets/css/index.js'
import { Button } from 'element-ui';

// elementui 组件按需加载
Vue.use(Button)
// or
// Vue.component(Button.name, Button);

//全局混入方法
Vue.mixin(mixin)

// 全局使用组件
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
