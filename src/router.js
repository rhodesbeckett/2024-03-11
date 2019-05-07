import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Squad from './views/Squad.vue';
// import About from './views/About.vue';
// import Play from './views/Play.vue';
// import Marketplace from './views/Marketplace.vue';
import Rankings from './views/Rankings.vue';
// import HeadToHead from './views/HeadToHead.vue';
import Team from './views/Team.vue';
import Buy from './views/Buy.vue';
import Activity from './views/Activity.vue';
import DeeplinkCard from "./views/DeeplinkCard";

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                web3Required: false
            }
        },
        {
            path: '/buy',
            name: 'buy',
            component: Buy,
            meta: {
                web3Required: true
            }
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: About
        // },
        // {
        //     path: '/play',
        //     name: 'play',
        //     component: Play
        // },
        // {
        //     path: '/headtohead',
        //     name: 'headtohead',
        //     component: HeadToHead
        // },
        // {
        //     path: '/marketplace',
        //     name: 'marketplace',
        //     component: Marketplace
        // },
        {
            path: '/activity',
            name: 'activity',
            component: Activity,
            meta: {
                web3Required: false
            }
        },
        {
            path: '/rankings',
            name: 'rankings',
            component: Rankings,
            meta: {
                web3Required: false
            }
        },
        {
            path: '/squad',
            name: 'squad',
            component: Squad,
            meta: {
                web3Required: true
            }
        },
        {
            path: '/team',
            name: 'team',
            component: Team,
            meta: {
                web3Required: true
            }
        },
        {
            path: '/card/:tokenId',
            name: 'card',
            component: DeeplinkCard,
            props: true,
            meta: {
                web3Required: false
            }
        }
    ]
});
