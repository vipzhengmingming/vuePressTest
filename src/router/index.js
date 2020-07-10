/*
 * @Description: 路由配置
 * @Author: Xiaowen丶
 * @Date: 2020-03-11 17:00:00
 * @LastEditors  : Xiaowen丶
 * @LastEditTime : 2020-03-11 17:00:00
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "login",
    meta: {
      "keepAlive": false,
      title: "用户登录"
    },
    component: () => import(/* webpackChunkName: "index" */ "../views/login.vue")
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
