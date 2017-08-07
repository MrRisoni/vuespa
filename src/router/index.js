import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BookApp from '@/components/BookApp'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/book',
            name: 'BookApp',
            component: BookApp
        }
    ]
})
