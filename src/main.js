import Vue from 'vue'
import App from './App.vue'
// 1.下载bootstrap
// 2.引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/fonts/iconfont.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
