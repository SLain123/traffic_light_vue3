import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/RedView.vue'),
    },
    {
        path: '/red',
        name: 'Red',
        component: () => import('../views/RedView.vue'),
    },
    {
        path: '/yellow',
        name: 'Yellow',
        component: () => import('../views/YellowView.vue'),
    },
    {
        path: '/green',
        name: 'Green',
        component: () => import('../views/GreenView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
