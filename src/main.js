import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$routerto = function routerTo(name, obj) {
  this.$router.push({
    name: name,
    query: obj
  });
};
import pagevue from './views/common/pagevue.vue'
Vue.component('pagevue', pagevue)
new Vue({
  router,
  store,
  render: h => h(App)
  // components:{
  //   App  //在 index.html页面不使用这个组件，就会返回 We're sorry but demo3 doesn't work properly without JavaScript enabled. Please enable it to continue.
  //  }
}).$mount('#app')
