<template>
  <div class="c-vote">
    <icon-star
      v-for="i in integerPart"
      :key="i + 'star'"
      class="icon"
    ></icon-star>
    <icon-star-half v-if="halfPath" class="icon"></icon-star-half>
  </div>
</template>

<script>
export default {
  name: 'CVote',
  props: {
    vote: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    integerPart() {
      return parseInt(this.vote)
    },
    halfPath() {
      return this.vote - this.integerPart > 0
    },
  },
}
</script>
<style lang="postcss" scoped>
.c-vote {
  @apply flex flex-row justify-start items-center;
}
.c-vote > .icon {
  @apply w-4 h-4 text-yellow-400;
}
</style>
