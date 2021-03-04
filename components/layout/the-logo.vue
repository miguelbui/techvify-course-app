<template>
  <h1 class="the-logo">
    <nuxt-link to="/" class="link">
      <icon-logo class="icon"></icon-logo>
    </nuxt-link>
  </h1>
</template>

<script>
export default {
  name: 'TheLogo',
}
</script>

<style lang="postcss">
.the-logo {
  @apply p-2 py-4 flex justify-center items-center;
}
.the-logo > .link {
  @apply p-1 inline-block bg-primary;
}
.the-logo > .link > .icon {
  @apply w-5 h-5 transform rotate-90 text-black;
}
</style>
