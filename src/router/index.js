import Vue from 'vue'
import Router from 'vue-router'
import BookApp from '@/components/BookApp'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'BookApp',
            component: BookApp
        }
    ]
})
