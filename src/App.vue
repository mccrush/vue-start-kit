<template>
  <div>
    <TheNavbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheNavbar from './components/interface/TheNavbar.vue'

export default {
  components: {
    TheNavbar
  }
}
</script>

<style lang="scss">
@import './scss/common';
</style>