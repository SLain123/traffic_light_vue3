import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LightView from '@/views/LightView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: LightView,
        props: { light: 'green', startTime: 15 },
    },
    {
        path: '/red',
        name: 'Red',
        component: LightView,
        props: { light: 'red', startTime: 10 },
    },
    {
        path: '/yellow',
        name: 'Yellow',
        component: LightView,
        props: { light: 'yellow', startTime: 3 },
    },
    {
        path: '/green',
        name: 'Green',
        component: LightView,
        props: { light: 'green', startTime: 15 },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
