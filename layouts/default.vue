<template>
  <div class="layout-default">
    <div class="header">
      <layout-the-header></layout-the-header>
    </div>
    <div class="body">
      <nuxt></nuxt>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style lang="postcss">
.layout-default {
  @apply flex flex-col justify-start items-stretch;
}
</style>
