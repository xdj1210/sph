import request from "@/utils/request";
import requestMock from "@/utils/requestMock";

export let reqCategory=() => request({url: `/product/getBaseCategoryList`})
//获取首页banner轮播图的接口
export const reqBanner = ()=>requestMock({url:'/banner'});