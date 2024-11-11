<template>
  <div class="container p-4 border border-2 border-success rounded mt-3">
    <div class="row">
      <div class="col-12">
        <h3 class="text-center">Выберите тип приложения</h3>
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
          :class="{ 'bg-success-subtle': appType === item.id }"
          @click="appType = item.id"
        >
          {{ item.title }}
        </h6>
      </div>
    </div>
    <div class="row">
      <div v-for="item in appRoutings" :key="item.id" class="col-6 p-2">
        <h6
          class="mc-btn-success cursor-pointer text-center border border-success rounded h-100 d-flex align-items-center justify-content-center p-2"
          :class="{ 'bg-success-subtle': appRouting === item.id }"
          @click="appRouting = item.id"
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
          class="text-center border border-success rounded h-100 d-flex align-items-center justify-content-center p-2"
          :class="{ 'bg-success-subtle': appHosting === item.id }"
        >
          {{ item.title }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import { dataAppTypes } from './data/dataAppTypes'
import { dataAppRoutings } from './data/dataAppRoutings'
import { dataAppHostings } from './data/dataAppHostings'

export default {
  data() {
    return {
      appType: '',
      appRouting: '',
      appHostings: '',
      appTypes: dataAppTypes,
      appRoutings: dataAppRoutings,
      appHostings: dataAppHostings
    }
  },
  computed: {
    appHosting() {
      return this.appRouting === '1' ? '2' : '1'
    }
  }
}
</script>

<style scoped>
.mc-btn-success:hover {
  background-color: rgb(209, 231, 220.8);
}
</style>