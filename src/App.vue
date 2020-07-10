<!--
 * @Description: 入口vue 全局样式在此配置
 * @Author: zmm
-->
<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { apiFileDetails } from '@/api/fileDetails.js'
export default {
  name: 'App',
  data() {
    return {}
  },
  mounted() {
     this.init();
  },
  methods: {
    async init(){
      let resp = await apiFileDetails({paraCode: "SYSTEM_NAME"});
      debugger;
    }
  }
}
</script>

<style>
</style>
