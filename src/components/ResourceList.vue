<template>
  <ul class="list-group resource-list mb-3">
    <resource-item
      :resource="resource"
      v-for="resource in resources"
      :key="resource._id"
      @click="onItemClick(resource)"
      :activeId="activeId"
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
    activeId: String,
  },
  emit: ['on-item-click'],
  methods: {
    onItemClick(resource) {
      this.$emit('on-item-click', resource);
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
