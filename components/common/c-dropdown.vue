<template>
  <div class="c-dropdown">
    <div v-show="toggleState" class="outer" @click="toggleDropdown"></div>
    <button class="button" @click="toggleDropdown">
      <span class="text">{{ selectedItemName }}</span>
      <icon-chevron-down class="icon"></icon-chevron-down>
    </button>
    <div v-show="toggleState" class="list">
      <button
        v-for="(item, index) in items"
        :key="index + 'dropdown'"
        class="item"
        @click="selectItem(item)"
      >
        {{ item.text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CDropdown',
  props: {
    items: {
      type: [Array, Object],
      default() {
        return []
      },
    },
    value: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      toggleState: false,
    }
  },
  computed: {
    selectedItemName() {
      return this.value?.text || 'Please select...'
    },
  },
  methods: {
    toggleDropdown() {
      this.toggleState = !this.toggleState
    },
    selectItem(item) {
      this.toggleState = false
      this.$emit('input', item)
      this.$emit('change', item)
    },
  },
}
</script>
<style lang="postcss" scoped>
.c-dropdown {
  @apply relative;
}
.c-dropdown > .outer {
  @apply fixed top-0 left-0 h-screen w-screen bg-transparent;
}
.c-dropdown > .button {
  @apply w-full flex flex-row justify-between items-center px-4 py-2 rounded-sm bg-gray-600 text-gray-200 space-x-1;
}
.c-dropdown > .button > .icon {
  @apply w-3 h-3;
}
.c-dropdown > .list {
  @apply absolute top-full left-0 w-full mt-1 flex flex-col justify-start items-stretch bg-gray-600 rounded-sm shadow-lg text-gray-300 text-left;
}
.c-dropdown > .list > .item {
  @apply hover:bg-gray-500 rounded-sm p-4 py-2 text-left text-sm;
}
</style>
