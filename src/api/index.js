import request from "@/utils/request";

export let reqCategory=() => request({url: `/product/getBaseCategoryList`})