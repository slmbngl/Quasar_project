import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/comp1',
        component: () => import('components/TheNavbarOneDotZero.vue'),
      },
      {
        path: '/comp2',
        component: () => import('components/TheNavbar.vue'),
      },
      {
        path: '/comp3',
        component: () => import('components/TheNavbarOneDotOne.vue'),
      },
      {
        path: '/comp4',
        component: () => import('components/NavCon.vue'),
      },
      {
        path: '/comp5',
        component: () => import('components/TheContent.vue'),
      },
      {
        path: '/comp6',
        component: () => import('components/TheProducts.vue'),
      },
      {
        path: '/comp7',
        component: () => import('components/TheLogin.vue'),
      },
      {
        path: '/comp8',
        component: () => import('pages/Seeddata.vue'),
      },
      {
        path: '/comp9',
        component: () => import('pages/TheCart.vue'),
      },
      { path: '', component: () => import('pages/TheNavbarOne.vue') },
      { path: '/login', component: () => import('components/TheLogin.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
