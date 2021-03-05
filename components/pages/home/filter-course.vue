<template>
  <div class="filter-courses">
    <button class="button">
      <icon-filter class="icon"></icon-filter>
      <span class="text">Filter</span>
    </button>
    <common-c-dropdown
      v-model="filter.type"
      :items="filterType"
      class="type"
      @change="updateTypeFilter"
    ></common-c-dropdown>
    <button class="button" @click="resetFilter">
      <icon-clear class="icon"></icon-clear>
      <span class="text">Clear all</span>
    </button>
  </div>
</template>

<script>
import { filterType } from '@/utils/constant'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      filter: {
        type: null,
      },
      filterType,
    }
  },
  methods: {
    ...mapActions({ setFilter: 'course/setFilter', setSearch: 'setSearch' }),
    updateTypeFilter(payload) {
      const filterItem = {
        props: 'type',
        payload,
      }
      this.setFilter(filterItem)
    },
    resetFilter() {
      this.filter.type = null
      this.updateTypeFilter(null)
      this.setSearch(null)
    },
  },
}
</script>

<style lang="postcss">
.filter-courses {
  @apply flex flex-row justify-start items-center text-sm space-x-1;
}
.filter-courses > .button {
  @apply flex flex-row justify-start items-center px-4 py-2 rounded-sm bg-gray-600 text-gray-200 space-x-1;
}
.filter-courses > .button > .icon {
  @apply w-5 h-5;
}
.filter-courses > .type {
  @apply flex-grow sm:flex-grow-0 sm:w-64;
}
</style>
