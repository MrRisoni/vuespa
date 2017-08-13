// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import {sync} from 'vuex-router-sync'
import VueI18n from 'vue-i18n'


require('../node_modules/bootstrap/less/bootstrap.less')

Vue.config.productionTip = false

Vue.use(Vuex)

import store from './store'

sync(store, router)

const translations = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界'
        }
    }
}
Vue.use(VueI18n)


 const i18n = new VueI18n({
     locale: 'ja', // set locale
     translations // set locale messages
 })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})


