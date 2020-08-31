<template>
  <li class="list-group-item d-flex justify-content-between lh-condensed">
    <div>
      <h6 class="my-0">{{ resource.title }}</h6>
      <small class="text-muted">{{ resource.description }}</small>
    </div>
    <span class="text-muted">{{ resource.type }}</span>
  </li>
</template>

<script>
export default {
  props: {
    resource: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
