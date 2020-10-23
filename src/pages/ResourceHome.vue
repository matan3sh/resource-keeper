<template>
  <div class="container">
    <resource-header />
    <div class="row">
      <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Your Resources</span>
          <span class="badge badge-secondary badge-pill">{{
            resourcesLength
          }}</span>
        </h4>
        <resource-search />
        <resource-list
          @on-item-click="selectResource"
          :resources="resources"
          :activeId="activeResource?._id"
        />
      </div>
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">
          Resource {{ activeResource?._id }}
          <template v-if="hasResources">
            <button
              @click="toggleView"
              :class="`btn btn-sm ${toggleBtnClass} mr-2`"
            >
              {{ isDetailView ? 'Update' : 'Detail' }}
            </button>
            <resource-delete
              :activeId="activeResource?._id"
              @on-resource-delete="
                hydrateResources($event, 'delete');
                !hasResources ? (isDetailView = true) : null;
              "
            />
          </template>
        </h4>
        <resource-detail v-if="isDetailView" :resource="activeResource" />
        <resource-update
          v-else
          :resource="activeResource"
          @on-resource-update="hydrateResources($event, 'update')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ResourceHeader from '@/components/ResourceHeader';
import ResourceSearch from '@/components/ResourceSearch';
import ResourceList from '@/components/ResourceList';
import ResourceUpdate from '@/components/ResourceUpdate';
import ResourceDetail from '@/components/ResourceDetail';
import ResourceDelete from '@/components/RecourceDelete';
import { fetchResources } from '@/services';

export default {
  components: {
    ResourceHeader,
    ResourceSearch,
    ResourceList,
    ResourceUpdate,
    ResourceDetail,
    ResourceDelete,
  },
  data() {
    return {
      isDetailView: true,
      selectedResource: null,
      resources: [],
    };
  },
  async created() {
    const resources = await fetchResources();
    this.resources = resources;
  },
  computed: {
    resourcesLength() {
      return this.resources.length;
    },
    toggleBtnClass() {
      return this.isDetailView ? 'btn-warning' : 'btn-primary';
    },
    hasResources() {
      return this.resourcesLength > 0;
    },
    activeResource() {
      return (
        this.selectedResource ||
        (this.hasResources && this.resources[0]) ||
        null
      );
    },
  },
  methods: {
    toggleView() {
      this.isDetailView = !this.isDetailView;
    },
    selectResource(selectedResource) {
      // TODO: it's copied by reference!!!
      this.selectedResource = selectedResource;
    },
    hydrateResources(newResource, operation = 'update') {
      if (operation === 'update') {
        this.resources = this.resources.map((resource) =>
          resource._id === newResource._id ? newResource : resource
        );
        this.selectResource(newResource);
      } else {
        this.resources = this.resources.filter(
          (resource) => resource._id !== newResource._id
        );
        this.selectResource(this.resources[0] || null);
      }
    },
  },
};
</script>

<style></style>
