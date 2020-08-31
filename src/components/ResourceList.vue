<template>
  <ul class="list-group resource-list mb-3">
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

<style scoped lang="scss">
.resource-list {
  max-height: 350px;
  overflow-y: auto;
}
</style>
