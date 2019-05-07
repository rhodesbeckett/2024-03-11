import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Squad from './views/Squad.vue';
import Rankings from './views/Rankings.vue';
import Team from './views/Team.vue';
import Buy from './views/Buy.vue';
import Activity from './views/Activity.vue';
// import DeeplinkCard from "./views/DeeplinkCard";

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/buy',
            name: 'buy',
            component: Buy
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: About
        // },
        {
            path: '/activity',
            name: 'activity',
            component: Activity
        },
        {
            path: '/rankings',
            name: 'rankings',
            component: Rankings
        },
        {
            path: '/squad',
            name: 'squad',
            component: Squad
        },
        {
            path: '/team',
            name: 'team',
            component: Team
        },
        // {
        //     path: '/card/:tokenId',
        //     name: 'card',
        //     component: DeeplinkCard,
        //     props: true
        // }
    ]
});
