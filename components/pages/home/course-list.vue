<template>
  <div class="home-course-list">
    <div class="category">
      <h2 class="name">Software development</h2>
    </div>
    <div class="sumary">
      <strong class="total">{{ filtedCourseQuantity }} Results</strong>
      <span class="sortby"> - {{ sortByText }}</span>
    </div>
    <div class="items">
      <div
        v-for="(course, index) in filtedCourses"
        :key="index + '_course'"
        class="item"
      >
        <pages-home-course-item :item="course"></pages-home-course-item>
      </div>
    </div>
  </div>
</template>

<script>
import { filterType } from '@/utils/constant'
import { courses } from '@/mockup/data'

import { mapGetters } from 'vuex'
export default {
  name: 'HomeCourseList',
  data() {
    return {
      courses,
    }
  },
  computed: {
    ...mapGetters({
      search: 'search',
      filter: 'course/filter',
      filterType: 'course/filterType',
    }),
    filtedCourses() {
      try {
        let filtedItems = this.filterCourses(this.courses)
        filtedItems = this.sortCourses(filtedItems)
        return filtedItems
      } catch (error) {
        return []
      }
    },
    filtedCourseQuantity() {
      return this.filtedCourses?.length || 0
    },
    sortByText() {
      return this.filterType === filterType.POPULARITY.value
        ? `Sort by most popular`
        : 'Sort by newest'
    },
  },
  methods: {
    filterCourses(courses) {
      return courses.filter(
        (item) =>
          item?.courseName.includes(this.search || '') ||
          item?.authorName.includes(this.search || '')
      )
    },
    sortCourses(courses) {
      const sortFunc =
        this.filterType === filterType.POPULARITY.value
          ? this.sortByField('numOfRates')
          : this.sortByDate('publishedDate')
      return courses.sort(sortFunc)
    },
    sortByField(fieldName) {
      return (a, b) => (a[fieldName] > b[fieldName] ? -1 : 1)
    },
    sortByDate(fieldName) {
      return (a, b) => {
        return this.$dateFns.compareDesc(
          new Date(a[fieldName]),
          new Date(b[fieldName])
        )
      }
    },
  },
}
</script>

<style lang="postcss">
.home-course-list {
  @apply flex flex-col justify-start items-stretch space-y-2 text-sm text-gray-400 border-t border-b border-gray-700;
}
.home-course-list > .category {
  @apply py-12 border-b border-gray-700 sm:hidden;
}
.home-course-list > .category > .name {
  @apply text-3xl text-white;
}
.home-course-list > .sumary {
  @apply flex flex-row justify-start items-baseline space-x-2 pt-8 pb-3;
}
.home-course-list > .sumary > .total {
  @apply text-xl text-white;
}
.home-course-list > .sumary > .sortby {
  @apply text-gray-400;
}
.home-course-list > .items > .item {
  @apply py-6 border-t border-gray-700;
}
</style>
