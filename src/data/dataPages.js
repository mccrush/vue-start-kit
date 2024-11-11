export const pages = [
  {
    id: '1',
    title: 'Главная страница',
    name: 'index',
    path: '/',
    component: () => import('./../pages/IndexMain.vue'),
    position: 1,
    showMenu: true,
    group: 1
  }
]