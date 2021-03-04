<template>
  <div class="home-page">
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
  name: 'HomePage',
}
</script>

<style lang="postcss">
.home-page > .wrapper {
  @apply flex flex-col justify-start items-stretch space-y-6;
}
.home-page > .wrapper > .filter {
  @apply px-6 py-2 border-b border-gray-700;
}
.home-page > .wrapper > .courses {
  @apply px-6 py-2 w-3/4;
}
</style>
