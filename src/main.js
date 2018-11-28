// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './index'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'
import axios  from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);


// 处理ajax请求
// axios.defaults.baseURL = process.env.NODE_ENV==='production'?'':'/api/api'
Vue.prototype.$ajax = axios


// 注册公共，并放置相关属性
var bus = new Vue();
Vue.prototype.bus = bus;
// Vue.prototype.devId = process.env.NODE_ENV==='production'?window.jsobj.getDevId():'b622dc9bce3b4100'


new Vue({
  el: '#index',
  router,
  components: { index },
  template: '<index/>'
})
