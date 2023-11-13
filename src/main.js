import Vue from 'vue'
import App from './App.vue'
import Header from './components/header'
import Footer from './components/footer'
import TypeNav from './components/typeNav'
import store from './store'
import '@/assets/reset.css'
import router from '@/router'
//引入轮播图组件
import { Swiper,SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.min.css'
import '@/mock/mockServe'
Vue.config.productionTip = false
Vue.component(Header.name,Header)
Vue.component(Footer.name,Footer)
Vue.component(TypeNav.name,TypeNav)
Vue.component("Swiper",Swiper);
Vue.component("SwiperSlide",SwiperSlide);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
