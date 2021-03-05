<template>
  <div class="courses-page">
    <div class="wrapper">
      <div class="filter">
        <pages-home-filter-course></pages-home-filter-course>
      </div>
      <div class="courses">
        <pages-home-course-list></pages-home-course-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoursesPage',
}
</script>

<style lang="postcss">
.courses-page > .wrapper {
  @apply flex flex-col justify-start items-stretch space-y-6;
}
.courses-page > .wrapper > .filter {
  @apply px-6 py-2 border-b border-gray-700;
}
.courses-page > .wrapper > .courses {
  @apply px-6 py-2 w-full md:w-4/5 lg:w-3/4 xl:w-2/3;
}
</style>
