<template>
  <button @click="onDeleteResource" class="btn btn-sm btn-danger">
    Delete
  </button>
</template>

<script>
import { deleteResource } from '@/services';

export default {
  props: {
    activeId: String,
  },
  emits: ['on-resource-delete'],
  methods: {
    async onDeleteResource() {
      const deletedResource = await deleteResource(this.activeId);
      this.$emit('on-resource-delete', deletedResource);
    },
  },
};
</script>

<style></style>
