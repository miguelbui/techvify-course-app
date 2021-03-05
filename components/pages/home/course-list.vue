<template>
  <div class="home-course-list">
    <div class="sumary">
      <strong class="total">1.195 Results</strong>
      <span class="sortby"> - Sorted by most popular</span>
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
import { mapGetters } from 'vuex'
export default {
  name: 'HomeCourseList',
  data() {
    return {
      courses: [
        {
          id: 1,
          courseName: 'React: Getting Started',
          isPopular: true,
          isNew: false,
          authorName: 'Samuel Eto',
          publishedDate: '2020-06-12',
          level: 'Beginner',
          numOfRates: 3.5,
          score: 3587,
          courseLength: '9h2m',
        },
        {
          id: 2,
          courseName: 'Javascript: Getting Started',
          isPopular: false,
          isNew: false,
          authorName: 'Romeo Lukaku',
          publishedDate: '2021-01-11',
          level: 'Beginner',
          numOfRates: 4.5,
          score: 196,
          courseLength: '4h2m',
        },
        {
          id: 3,
          courseName: 'I dont know JS',
          isPopular: true,
          isNew: true,
          authorName: 'Giccwo EtKansaoo',
          publishedDate: '2020-04-25',
          level: 'Beginner',
          numOfRates: 5.0,
          score: 2101,
          courseLength: '11h10m',
        },
        {
          id: 4,
          courseName: 'Design pattern, Javascript',
          isPopular: false,
          isNew: false,
          authorName: 'Tom Ford',
          publishedDate: '2019-09-14',
          level: 'Middle',
          numOfRates: 4.5,
          score: 1102,
          courseLength: '12h2m',
        },
        {
          id: 5,
          courseName: 'My SQL, Relationship Database RSMDC',
          isPopular: true,
          isNew: true,
          authorName: 'Makr Kizamic',
          publishedDate: '2020-04-25',
          level: 'Advance',
          numOfRates: 4.5,
          score: 2992,
          courseLength: '8h20m',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({ search: 'search', filter: 'course/filter' }),
    filtedCourses() {
      try {
        let filtedItems = this.filterCourses(this.courses)
        filtedItems = this.sortCourses(filtedItems)
        return filtedItems
      } catch (error) {
        return []
      }
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
        this.filter?.type === filterType?.POPULARITY
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
.home-course-list > .sumary {
  @apply flex flex-row justify-start items-baseline space-x-2 pt-12 pb-3;
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
