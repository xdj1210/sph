import { reqCategory,reqBanner } from "@/api";

let actions = {
    async getCategory({ commit, state, dispatch, getters }) {
        const result = await reqCategory();
        if (result.code == 200) {
            commit('GETCATEGORY', result.data);
        }
    },
    //获取轮播图
    async getBanner({commit}){
        const result=await reqBanner();
        if(result.code===200){
            commit('GETBANNER',result.data);
            console.log(result);
        }
    }
};

let mutations={
    GETCATEGORY(state,category){
        state.category=category
    },
    GETBANNER(state,bannerArr){
        state.bannerArr=bannerArr
    }

};

let state = {
    category:[],
    bannerArr:[]
};

export default {
    state,
    mutations,
    actions
}
