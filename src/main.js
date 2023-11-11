import Vue from 'vue'
import App from './App.vue'
import Header from './components/header'
import Footer from './components/footer'
import TypeNav from './components/typeNav'
import '@/assets/reset.css'
import router from '@/router'
Vue.config.productionTip = false
Vue.component(Header.name,Header)
Vue.component(Footer.name,Footer)
Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
