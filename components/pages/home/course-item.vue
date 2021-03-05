<template>
  <div class="home-course-item">
    <div class="info">
      <div class="status">
        <span class="course">
          <icon-video class="icon"></icon-video> COURSE</span
        >
        <span v-if="isPopular" class="popular">POPULAR</span>
        <span v-if="isNew" class="new">NEW</span>
      </div>
      <div class="author">
        <strong class="name">{{ courseName }}</strong>
        <span class="owner">By {{ courseAuthor }}</span>
      </div>
      <div class="property">
        <span>{{ publishedDate }}</span>
        <span>{{ level }}</span>
        <span class="flex flex-row justify-start items-center">
          <common-c-vote :vote="vote"></common-c-vote>
          <span>({{ score }})</span>
        </span>
        <span>{{ courseLength }}</span>
      </div>
    </div>
    <div class="action">
      <button class="button">
        <icon-more class="icon"></icon-more>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCourseItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    courseName() {
      return this.item?.courseName
    },
    courseAuthor() {
      return this.item?.authorName
    },
    isPopular() {
      return this.item?.isPopular
    },
    isNew() {
      return this.item?.isNew
    },
    publishedDate() {
      return this.$dateFns.format(this.item?.publishedDate, 'MMM d, yyyy')
    },
    level() {
      return this.item?.level
    },
    vote() {
      return this.item?.numOfRates
    },
    score() {
      return this.item?.score
    },
    courseLength() {
      return this.item?.courseLength
    },
  },
}
</script>

<style lang="postcss">
.home-course-item {
  @apply flex flex-row justify-between items-stretch;
}
.home-course-item > .action > .button {
  @apply p-2 rounded-full text-gray-400;
}
.home-course-item > .action > .button > .icon {
  @apply w-5 h-5;
}
.home-course-item > .info {
  @apply flex flex-col justify-start items-stretch space-y-4;
}
.home-course-item > .info > .status {
  @apply flex flex-row justify-start items-center space-x-2;
}
.home-course-item > .info > .status > .course,
.home-course-item > .info > .status > .popular,
.home-course-item > .info > .status > .new {
  @apply uppercase text-xs px-1 rounded-sm;
}
.home-course-item > .info > .status > .course {
  @apply bg-gray-800 text-gray-400 border border-gray-800 flex flex-row justify-start items-center;
}
.home-course-item > .info > .status > .course > .icon {
  @apply w-4 h-4 mr-1;
}
.home-course-item > .info > .status > .popular {
  @apply text-purple-400 border border-purple-400;
}
.home-course-item > .info > .status > .new {
  @apply text-yellow-400 border border-yellow-400;
}
.home-course-item > .info > .author {
  @apply flex flex-col justify-start;
}
.home-course-item > .info > .author > .name {
  @apply text-white font-bold text-base;
}
.home-course-item > .info > .author > .owner {
  @apply text-xs;
}
.home-course-item > .info > .property {
  @apply text-xs flex flex-row justify-start items-center space-x-2;
}
</style>
