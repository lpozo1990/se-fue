import { createRouter, createWebHistory } from 'vue-router';
import { PublicRoutes } from './PublicRoutes';

import { supabase } from '@/utils/supabase';

const router = createRouter({
    history: createWebHistory(),
    routes: [...PublicRoutes],
});

router.beforeEach((to, from, next) => {
    console.log(to)
    // get current user info
    const currentUser = supabase.auth.user();
    const requiresAuth = to.matched.some
    (record => record.meta.requiresAuth);
    if(requiresAuth && !currentUser) next('/');
    else if(!requiresAuth && currentUser) next("/home");
    else next();
  })


export default router;
