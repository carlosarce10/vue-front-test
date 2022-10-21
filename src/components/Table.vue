<template>
  <div>
    <b-table responsive striped hover :fields="fields" :items="bookList">
      <template #cell(funciones)="data">
        <div class="text-nowrap">
          <b-button
            class="mx-1"
            variant="outline-danger"
            @click="$emit('deleteBook', data.index)"
            ><b-icon-trash></b-icon-trash
          ></b-button>
          <b-button
            class="mx-1"
            variant="outline-warning"
            @click="$emit('getBook', data.index)"
            ><b-icon-pencil-square></b-icon-pencil-square
          ></b-button>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    bookList: {
      type: Array,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>

<style scoped></style>
