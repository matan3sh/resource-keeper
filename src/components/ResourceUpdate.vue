<template>
  <form>
    <div v-if="alert?.success" class="alert alert-success">
      {{ alert.success }}
    </div>
    <div v-if="alert?.error" class="alert alert-danger">
      {{ alert.error }}
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
    <div class="mb-3">
      <label htmlFor="link">Type</label>
      <select class="form-control" id="link" v-model="updateResource.type">
        <option
          v-for="resourceType in types"
          :key="resourceType"
          :value="resourceType"
          >{{ resourceType }}</option
        >
      </select>
    </div>
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
import alertMixin from '@/mixins/alert';

export default {
  props: {
    resource: Object,
  },
  data() {
    return {
      updateResource: { ...this.resource },
      types: ['blog', 'video', 'book'],
    };
  },
  mixins: [alertMixin],
  emits: ['on-resource-update'],
  beforeUnmount() {
    this.clearAlertTimeout();
  },
  watch: {
    resource(newResource, previousResource) {
      if (newResource && newResource._id !== previousResource._id) {
        this.clearAlertTimeout();
        this.alert = this.initAlert();
      }
      this.updateResource = { ...newResource };
    },
  },
  methods: {
    async submitForm() {
      try {
        const updatedResource = await updateResource(
          this.updateResource._id,
          this.updateResource
        );
        this.$emit('on-resource-update', updatedResource);
        this.setAlert('success', 'Resource was updated!');
      } catch (error) {
        this.setAlert('error', error);
      }
    },
  },
};
</script>

<style></style>
