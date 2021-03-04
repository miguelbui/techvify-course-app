<template>
  <div class="home-course-list">
    <div class="sumary">
      <strong class="total">1.195 Results</strong>
      <span class="sortby"> - Sorted by most popular</span>
    </div>
    <div class="items">
      <div
        v-for="(course, index) in courses"
        :key="index + '_course'"
        class="item"
      >
        <pages-home-course-item :item="course"></pages-home-course-item>
      </div>
    </div>
  </div>
</template>

<script>
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
          publishedDate: 'Oct 6, 2020',
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
          publishedDate: 'Jan 11, 2021',
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
          publishedDate: 'Apr 25, 2020',
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
          publishedDate: 'Sep 20, 2019',
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
          publishedDate: 'Apr 20, 2020',
          level: 'Advance',
          numOfRates: 4.5,
          score: 2992,
          courseLength: '8h20m',
        },
      ],
    }
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
