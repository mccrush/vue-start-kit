<template>
  <div>
    <!-- <TheNavbar /> -->
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <PageIndex />
  </div>
</template>

<script>
import TheNavbar from './components/interface/TheNavbar.vue'
import PageIndex from './pages/PageIndex.vue'

export default {
  components: {
    PageIndex
  }
}
</script>

<style lang="scss">
@use './scss/common';
</style>