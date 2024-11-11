<template>
  <div class="container p-4 border border-2 border-success rounded mt-3">
    <div class="row">
      <div class="col-12">
        <h3 class="text-center">Выберите тип приожения</h3>
      </div>
    </div>
    <div class="row">
      <div v-for="item in appTypes" :key="item.id" class="col-3 p-2">
        <!-- <button
          class="btn bg-success-subtle btn-outline-success shadow-none lh-sm w-100 h-100"
        >
          {{ item.title }}
        </button> -->
        <h6
          class="mc-btn-success cursor-pointer text-center border border-success rounded h-100 d-flex align-items-center justify-content-center p-2"
          :class="{ 'bg-success-subtle': true }"
        >
          {{ item.title }}
        </h6>
      </div>
    </div>
    <div class="row">
      <div v-for="item in appRoutings" :key="item.id" class="col-6 p-2">
        <h6
          class="mc-btn-success cursor-pointer text-center border border-success rounded h-100 d-flex align-items-center justify-content-center p-2"
          :class="{ 'bg-success-subtle': true }"
        >
          {{ item.title }}
        </h6>
      </div>
    </div>
    <div class="row">
      <div class="col-12 pt-3">
        <h4 class="text-center">Публикуйте приложение с помощью</h4>
      </div>
    </div>
    <div class="row">
      <div v-for="item in appHostings" :key="item.id" class="col-4 p-2">
        <h6
          class="mc-btn-success cursor-pointer text-center border border-success rounded h-100 d-flex align-items-center justify-content-center p-2"
          :class="{ 'bg-success-subtle': true }"
        >
          {{ item.title }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appType: '',
      appRouting: '',
      appHostings: '',
      appTypes: [
        {
          id: '1',
          title: 'Сайт без админки',
          description: '',
          position: 1,
          active: true
        },
        {
          id: '2',
          title: 'Сайт с админкой',
          description: '',
          position: 2,
          active: true
        },
        {
          id: '3',
          title: 'Приложение корпоративное',
          description: '',
          position: 3,
          active: true
        },
        {
          id: '4',
          title: 'Приложение публичное',
          description: '',
          position: 4,
          active: true
        }
      ],
      appRoutings: [
        {
          id: '1',
          title: 'С роутингом',
          description: '',
          position: 1,
          active: true
        },
        {
          id: '2',
          title: 'Без роутинга',
          description: '',
          position: 2,
          active: true
        }
      ],
      appHostings: [
        {
          id: '1',
          title: 'GitHub Pages',
          description: '',
          position: 1,
          active: true
        },
        {
          id: '2',
          title: 'Vercel',
          description: '',
          position: 2,
          active: true
        },
        {
          id: '3',
          title: 'NetAngels',
          description: '',
          position: 3,
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped>
.mc-btn-success {
  background-color: #ffffff;
}
.mc-btn-success:hover {
  background-color: rgb(209, 231, 220.8);
}
</style>