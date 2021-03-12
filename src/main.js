import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import store from './store/store.js'
import {request} from './network/request.js';
import toast from 'components/common/toast/toast.js'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.use(toast)

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

FastClick.attach(document.body)
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/vue.jpg')
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios({
// 	url:'http://123.207.32.32:8000/home/multidata'
// }).then(res=>console.log(res))
// axios.all([axios({
// 	url:"http://123.207.32.32:8000/home/multidata"
// }),axios({
// 	url:'http://123.207.32.32:8000/home/data',
// 	params:{
// 		type:'sell',
// 		page:5
// 	}
// })]).then(res=>console.log(res))


//  request({
// 	url:'/category'
//  }).then(res=>console.log(res)).catch(err=>console.log(err))
