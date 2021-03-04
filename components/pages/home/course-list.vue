<template>
  <div class="home-course-list">
    <div class="sumary">
      <strong class="total">1.195 Results</strong>
      <span class="sortby"> - Sorted by most popular</span>
    </div>
    <div class="items">
      <home-course-item class="item"></home-course-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCourseList',
}
</script>

<style lang="postcss">
.home-course-list {
  @apply flex flex-col justify-start items-stretch space-y-2 text-sm text-gray-400 border-t border-b border-gray-700;
}
.home-course-list > .sumary {
  @apply flex flex-row justify-start items-baseline space-x-2 pt-12 pb-3;
}
.home-course-list > .sumary > .total {
  @apply text-xl text-white;
}
.home-course-list > .sumary > .sortby {
  @apply text-gray-400;
}
</style>
