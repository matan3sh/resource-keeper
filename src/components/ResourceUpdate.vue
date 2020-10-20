<template>
  <form>
    <div v-if="alert?.success" class="alert alert-success">
      {{ alert.success }}
    </div>
    <div class="mb-3">
      <label htmlFor="firstName">Title</label>
      <input
        v-model="updateResource.title"
        type="text"
        class="form-control"
        id="firstName"
        placeholder="How to survice in mountains"
      />
    </div>
    <div class="mb-3">
      <label for="description">Description</label>
      <textarea
        v-model="updateResource.description"
        class="form-control"
        id="description"
        placeholder="Just some description"
      ></textarea>
    </div>
    <!-- <div class="mb-3">
      <label htmlFor="type">Type</label>
      <input
        type="text"
        class="form-control"
        id="email"
        placeholder="Very interesting book"
      />
    </div> -->
    <div class="mb-3">
      <label htmlFor="username">Resource Link</label>
      <div class="input-group">
        <input
          type="text"
          v-model="updateResource.link"
          class="form-control"
          id="link"
          placeholder="Link"
        />
      </div>
    </div>
    <hr class="mb-4" />
    <button
      @click.prevent="submitForm"
      class="btn btn-primary btn-lg btn-block"
      type="submit"
    >
      Submit
    </button>
  </form>
</template>

<script>
import { updateResource } from '@/services';

export default {
  props: {
    resource: Object,
  },
  data() {
    return {
      updateResource: { ...this.resource },
      types: ['blog', 'video', 'book'],
      alert: {
        success: null,
        error: null,
      },
    };
  },
  emits: ['on-resource-update'],
  watch: {
    resource(newResource) {
      this.updateResource = { ...newResource };
    },
  },
  methods: {
    async submitForm() {
      this.alert = { success: null, error: null };
      const updatedResource = await updateResource(
        this.updateResource._id,
        this.updateResource
      );
      this.$emit('on-resource-update', updatedResource);
      this.alert.success = 'Resource was updated!';
    },
  },
};
</script>

<style></style>
