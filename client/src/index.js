import App from './app'
import Vue from 'vue'
import router from './router'
import VueRouter from 'vue-router'
console.log(router);
const vm = new Vue({
  router,
  render:h=>h(App)
}).$mount('#app')
console.log(vm);