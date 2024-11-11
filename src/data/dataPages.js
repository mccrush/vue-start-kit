export const dataPages = [
  {
    id: '1',
    title: 'Главная страница',
    name: 'index',
    path: '/',
    component: () => import('./../pages/PageIndex.vue'),
    position: 1,
    showMenu: true,
    group: 1
  }
]