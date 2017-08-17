// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import {sync} from 'vuex-router-sync'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(Vuex)

import store from './store'

sync(store, router)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})


