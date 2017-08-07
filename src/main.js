// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'




require('../node_modules/bootstrap/less/bootstrap.less')

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        bags : 12,
        depAirport : 'RHO',
        arrAirport: 'LHR'
    },
    mutations: {
        increment (state) {
            state.bags++
        }
    }
})


sync(store, router)



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App},

})


