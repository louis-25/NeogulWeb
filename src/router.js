import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import Main from './components/instagram/Main.vue'
import Login from './components/Login.vue'

const routes = [    
    {
        path: "/",
        component: Home,
    },    
    {
        path: "/main",
        component: Main,
    },
    {
        path: "/login",
        component: Login,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 