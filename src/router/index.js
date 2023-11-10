import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Search from '@/pages/search'
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            name:'home',
            meta:{
                isActive:true
            }
        },
        {
            path:'/login',
            component:Login,
            name:'login',
            meta:{
                isActive:false
            }
        },
        {
            path:'/register',
            component:Register,
            name:'register',
            meta:{
                isActive:false
            }
        },
        {
            path:'/search',
            component:Search,
            name:'search',
            meta:{
                isActive:true
            }
        },
        {
            path:'/',
            redirect: '/home'
        }
    ]
})