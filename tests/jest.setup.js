process.env.VUE_CLI_BABEL_TARGET_NODE = true;
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.config.productionTip = false;

// Silence errore related to Vuetify in unit tests.
// See: https://github.com/vuetifyjs/vuetify/issues/4068#issuecomment-422406319 and related discussion.
const originalLogError = console.error;
console.error = (...args) => {
    if (
        typeof args[0] === 'string' &&
        args[0] &&
        args[0].includes('[Vuetify]') &&
        args[0].includes('https://github.com/vuetifyjs/vuetify/issues/4068')
    )
        return;
    originalLogError(...args);
};

// Silence error related to Vuetify in unit tests.
// See: https://github.com/vuetifyjs/vuetify/issues/4068#issuecomment-422406319 and related discussion.
const originalLogWarn = console.warn;
console.warn = (...args) => {
    if (
        typeof args[0] === 'string' &&
        args[0]
    )
        return;
    originalLogWarn(...args);
};
