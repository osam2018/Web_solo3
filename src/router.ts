import Vue from 'vue'
import Router from 'vue-router'
import MyFeed from './views/MyFeed.vue'
import OthersFeed from './views/OthersFeed.vue'
import NeedFeed from './views/NeedFeed.vue'
import SignUp from './views/SignUp.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/othersfeed',
            name: 'othersfeed',
            component: OthersFeed
        },{
            path: '/myfeed',
            name: 'myfeed',
            component: MyFeed
        }, {
            path: '/needfeed',
            name: 'needfeed',
            component: NeedFeed
        }, {
            path: '/signup',
            name: 'signup',
            component: SignUp
        }
    ]
})
