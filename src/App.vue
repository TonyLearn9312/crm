<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import {getLanguageJson} from "@/api/api"
export default {
  data () {
    return {}
  },
  created () {

    //在页面加载时读取sessionStorage里的状态信息
    if (window.sessionStorage.getItem("store") ) {
      this.$store.replaceState(Object.assign({}, JSON.parse(window.sessionStorage.getItem("store")), this.$store.state))
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
      window.sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })

    console.log(this.$store.state)
  }
}
</script>
<style lang='scss'>
#app {
  height: 100%;
  width: 100%;

}
</style>

