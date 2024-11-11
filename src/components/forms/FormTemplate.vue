<template>
  <div class="container">
    <div class="row">
      <!-- Название  -->
      <div class="col-12">
        <form class="form-floating">
          <input
            type="text"
            class="form-control form-control-sm"
            id="inputTitle"
            v-model.trim="item.title"
          />
          <label for="inputTitle">Название</label>
        </form>
      </div>

      <!-- Позиция  -->
      <div class="col-12 col-sm-6 mt-2">
        <form class="form-floating">
          <input
            type="number"
            class="form-control form-control-sm"
            id="inputPosition"
            v-model.number="item.position"
          />
          <label for="inputPosition">Позиция</label>
        </form>
      </div>
    </div>

    <!-- Должность -->
    <!-- <div class="col-12 mt-2">
        <form class="form-floating">
          <select
            class="form-select form-select-sm"
            id="inputUserJobId"
            v-model="item.jobId"
          >
            <option v-for="job in jobs" :key="job.id" :value="job.id">
              {{ job.title }}
            </option>
          </select>
          <label for="inputUserJobId">Должность</label>
        </form>
      </div> -->

    <div class="row mt-2">
      <div class="col-12 d-flex justify-content-end">
        <div v-if="mod === 'create'">
          <BtnAddText @click="$emit('add-item', { item })" />
        </div>
        <div v-if="mod === 'edit'">
          <BtnSaveText @click="$emit('save-item', { item })" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnAddText from './../buttons/BtnAddText.vue'
import BtnSaveText from './../buttons/BtnSaveText.vue'

export default {
  components: { BtnAddText, BtnSaveText },
  props: { item: Object, mod: String },
  emits: ['save-item', 'add-item']
}
</script>