import { RouteRecordRaw } from 'vue-router';
import Home from '@/components/Home.vue'

export const PublicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component:  Home,
    },
   
];
