import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

import Home from './modules/home';
import Search from './modules/search';
import User from './modules/user';
export default new Store({
    modules:{
        Home,
        Search,
        User
    }
})