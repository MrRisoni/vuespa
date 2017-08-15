import Vue from 'vue'
import Router from 'vue-router'
import BookApp from '@/components/BookFlow/BookApp'
import Search from '@/components/Search/Search'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/book',
            name: 'BookApp',
            component: BookApp
        },
        {
            path: '/',
            name: 'Search',
            component: Search
        }
    ]
})
