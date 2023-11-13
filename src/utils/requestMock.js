import axios from "axios";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })
let request=axios.create({
    baseURL:'/mock',
    timeout:5000
})

//请求拦截器
request.interceptors.request.use((config)=>{
    NProgress.start();
    console.log(config);
    return config;
})

//相应拦截器
request.interceptors.response.use((res)=>{
    NProgress.done()
    console.log(res);
    return res.data
},(error)=> {
    let status=error.response.status
    switch(status){
        case 404:
            alert('请求失败');
            break;
        case 403:
            alert('未授权');
            break;
        case 500 || 501 || 502 || 503 || 504:
            alert('服务器BBQ');
            break;
    }
    return new Promise(()=>{})
})
export default request;



