<template>
  <div class="home-course-list">
    <home-course-item></home-course-item>
  </div>
</template>

<script>
export default {
  name: 'HomeCourseList',
}
</script>

<style lang="postcss">
.home-course-list {
  @apply flex flex-col justify-start items-stretch space-y-2;
}
</style>
