import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/Register'
import Nofind from './views/404'
import Login from './views/Login'
import Home from './views/Home'
import InfoShow from './views/InfoShow'
import FoundList from './views/FoundList'
import proposalCheck from './views/proposalCheck'
import createNewProposal from './views/createNewProposal'
import manageProposal from './views/manageProposal'
import openProposal from './views/openProposal'
import path1 from './views/path1'
import path2 from './views/path2'
import authorityManagement from './views/authorityManagement'
import database from './views/database'
import qualityControl from './views/qualityControl'
import compare from './views/compare'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '*', name: '/404', component: Nofind },
        { path: '/', redirect: '/index' },
        { path: '/register', name: 'register', component: Register },
        { path: '/login', name: 'login', component: Login },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                { path: '', component: Home },
                { path: '/home', name: 'home', component: Home },
                { path: '/infoshow', name: 'infoshow', component: InfoShow },
                { path: '/foundlist', name: 'foundlist', component: FoundList },
                { path: '/proposalCheck', name: 'proposalCheck', component: proposalCheck },
                { path: '/createNewProposal', name: 'createNewProposal', component: createNewProposal },
                { path: '/manageProposal', name: 'manageProposal', component: manageProposal },
                { path: '/path1', name: 'path1', component: path1 },
                { path: '/path2', name: 'path2', component: path2 },
                { path: '/openProposal', name: 'openProposal', component: openProposal },
                { path: '/authorityManagement', name: 'authorityManagement', component: authorityManagement },
                { path: '/database', name: 'database', component: database },
                { path: '/qualityControl', name: 'qualityControl', component: qualityControl },
                { path: '/compare', name: 'compare', component: compare }

            ]
        },

        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})

// 添加路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.eleToken ? true : false;
//   if (to.path == "/login" || to.path == "/register") {
//     next();
//   } else {
//     isLogin ? next() : next("/login");
//   }
// })

export default router;