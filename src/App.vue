<template>
  <div class="container">
    <resource-header />
    <router-view />
  </div>
</template>

<script>
import ResourceHeader from '@/components/ResourceHeader';

export default {
  components: {
    ResourceHeader,
  },
};
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
