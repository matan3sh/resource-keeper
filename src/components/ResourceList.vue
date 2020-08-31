<template>
  <ul class="list-group mb-3">
    <resource-item
      :resource="resource"
      v-for="resource in resources"
      :key="resource._id"
    />
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem';
export default {
  components: { ResourceItem },
  props: {
    resources: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
