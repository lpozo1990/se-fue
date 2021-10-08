import { RouteRecordRaw } from 'vue-router';
import Home from '@/components/Home.vue'
import Dashboard from '@/components/Dashboard.vue';

export const PublicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component:  Home,
    },
    {
        path: '/home',
        name: "dashboard",
        component: Dashboard,
        meta: {
            requiresAuth: true,
        }
    }
   
];
