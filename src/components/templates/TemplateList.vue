<template>
  <div>
    <div>
      <BtnCreateElement @click="$emit('create-item')" />
    </div>

    <div v-if="!items.length">
      <h6>Список элементов пуст</h6>
    </div>

    <ul v-else class="list-group">
      <li
        v-for="item in items"
        :key="item.id"
        class="list-group-item d-flex justify-content-between align-items-center ps-2 pe-2"
      >
        <span>{{ item.title }}</span>
        <div>
          <BtnEdit @click="$emit('edit-item', { item })" />
          <BtnTrash @click="$emit('delete-item', { item })" class="ms-2" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BtnEdit from './../buttons/BtnEdit.vue'
import BtnTrash from './../buttons/BtnTrash.vue'
import BtnCreateElement from './../buttons/BtnCreateElement.vue'

export default {
  components: { BtnEdit, BtnTrash, BtnCreateElement },
  props: { items: Array },
  emits: ['edit-item', 'delete-item', 'create-item']
}
</script>