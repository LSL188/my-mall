import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// moment.js格式化时间
// import moment from "moment"

// dayjs格式化时间
import dayjs from 'dayjs'

// 自己封装toast
import toast from 'components/common/toast'

// 移动端300ms延迟
import FastClick from 'fastclick'

// 图片懒加载插件
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// 不相关组件传值
Vue.prototype.$bus = new Vue()

// moment.js格式化时间
// Vue.prototype.moment  =  moment
// Vue.filter('dateFormat', function(dataStr, pattern) {
//   // console.log(dataStr) //1537099511
//   // console.log(new Date().getTime()) //1576593159365
//   return moment(dataStr*1000).format(pattern)
// })

// dayjs格式化时间
Vue.prototype.$dayjs = dayjs

// 自己封装toast
Vue.use(toast)

// 移动端300ms延迟
FastClick.attach(document.body)

// 图片懒加载插件
Vue.use(VueLazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
