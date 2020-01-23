import Vue from 'vue';
import Vuex from 'vuex';
import DocumentCategories from './modules/DocumentCategories.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        DocumentCategories,
    },
});
