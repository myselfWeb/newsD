import Vue from 'vue'
import Router from 'vue-router'
import FeedList from '@/page/feedList/FeedList'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'FeedList',
            component: FeedList
        }
    ]
})
