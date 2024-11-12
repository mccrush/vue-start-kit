export const dataPages = [
  {
    id: '1',
    path: '/',
    name: 'index',
    title: 'Главная страница',
    component: () => import('./../pages/PageIndex.vue'),
    position: 1,
    showMenu: true,
    group: 1
  }
]