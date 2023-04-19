import Vue from 'vue'
import Router from 'vue-router'
import HeaderApp from './layouts/header-app';
import FooterApp from './layouts/footer-app';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/views/home-app.vue')
            },
            meta: {
                title: 'Автомагазин Руль',
                description: ''
            },
            children: [],
        },
        {
            path: '/car-repair',
            name: 'car-repair',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/pages/car-repair.vue')
            },
            meta: {
                title: 'Активный ремонт',
                description: ''
            },
            children: [],
        },
        {
            path: '/place-order',
            name: 'place-order',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/pages/new-order.vue')
            },
            meta: {
                title: 'Сделать заказ',
                description: ''
            },
            children: [],
        },
        {
            path: '/active-order',
            name: 'active-order',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/pages/active-order.vue')
            },
            meta: {
                title: 'Активный заказ',
                description: ''
            },
            children: [],
        },
        {
            path: '/place-order-success',
            name: 'place-order-success',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/components/place-order-success.vue')
            },
            meta: {
                title: 'Заявка отправлена',
                description: ''
            },
            children: [],
        },
        {
            path: '/service-record-success',
            name: 'service-record-success',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/components/service-record-success.vue')
            },
            meta: {
                title: 'Заявка в обработке',
                description: ''
            },
            children: [],
        },
        {
            path: '/service-record',
            name: 'service-record',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/pages/service-record.vue')
            },
            meta: {
                title: 'Запись в автосервис',
                description: ''
            },
            children: [],
        },
        {
            path: '/errors-page',
            name: 'errors-page',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/pages/errors-page.vue')
            },
            meta: {
                title: 'Ошибка',
                description: ''
            },
            children: [],
        },
        {
            path: '/my-cars',
            name: 'my-cars',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/pages/my-cars.vue')
            },
            meta: {
                title: 'Мои автомобили',
                description: ''
            },
            children: [],
        },
        {
            path: '/cars-details',
            name: 'cars-details',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/components/cars-details.vue')
            },
            meta: {
                title: 'Автомобиль',
                description: ''
            },
            children: [],
        },
        {
            path: '/new-car',
            name: 'new-car',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/components/new-car.vue')
            },
            meta: {
                title: 'Новый автомобиль',
                description: ''
            },
            children: [],
        },
        {
            path: '/stocks',
            name: 'stocks',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/pages/stocks.vue')
            },
            meta: {
                title: 'Акции',
                description: ''
            },
            children: [],
        },
        {
            path: '/stocks-page',
            name: 'stocks-page',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/components/stocks-page.vue')
            },
            meta: {
                title: 'Акция',
                description: ''
            },
            children: [],
        },
        {
            path: '/shopping-cart',
            name: 'shopping-cart',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/pages/shopping-cart.vue')
            },
            meta: {
                title: 'Покупки',
                description: ''
            },
            children: [],
        },
        {
            path: '/shopping-details',
            name: 'shopping-details',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/components/shopping-details.vue')
            },
            meta: {
                title: 'Детали покупки',
                description: ''
            },
            children: [],
        },
        {
            path: '/profile-page',
            name: 'profile-page',
            components: {
                header: HeaderApp,
                footer: FooterApp,
                //aside: Aside,
                default: () => import('@/pages/profile-page.vue')
            },
            meta: {
                title: 'Профиль',
                description: ''
            },
            children: [],
        },
    ]
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    let meta = document.createElement('meta');
    meta.name = "description";
    meta.content = to.meta.description;
    document.getElementsByTagName('head')[0].appendChild(meta);

    next()
});
export default router;