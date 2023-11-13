import { reqCategory } from "@/api";

let actions = {
    async getCategory({ commit, state, dispatch, getters }) {
        const result = await reqCategory();
        if (result.code == 200) {
            commit('GETCATEGORY', result.data);
        }
    }
};

let mutations={
    GETCATEGORY(state,category){
        state.category=category
    }
}
let state = {
    category:[]
}

export default {
    state,
    mutations,
    actions
}
