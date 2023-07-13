import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LightView from '@/views/LightView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: LightView,
        props: { light: 'green', startTime: 15 },
    },
    {
        path: '/red',
        name: 'red',
        component: LightView,
        props: { light: 'red', startTime: 10 },
    },
    {
        path: '/yellow',
        name: 'yellow',
        component: LightView,
        props: { light: 'yellow', startTime: 3 },
    },
    {
        path: '/green',
        name: 'green',
        component: LightView,
        props: { light: 'green', startTime: 15 },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
