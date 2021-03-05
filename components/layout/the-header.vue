<template>
  <header class="the-header">
    <div class="logo link">
      <button class="button menu">
        <icon-menu class="icon"></icon-menu>
      </button>
      <layout-the-logo></layout-the-logo>
    </div>
    <div class="link navi">
      <nuxt-link class="button" to="/">
        <icon-home class="icon"></icon-home>
        <span class="text">Home</span>
      </nuxt-link>
      <nuxt-link class="button" to="/browse">
        <icon-browse class="icon"></icon-browse>
        <span class="text">Browse</span>
      </nuxt-link>
    </div>
    <div class="search">
      <div class="form">
        <icon-search class="icon"></icon-search>
        <input
          v-model="model.search"
          type="text"
          class="input"
          placeholder="Search..."
          @keyup.enter="submitSearch"
        />
      </div>
    </div>
    <div class="link navi">
      <nuxt-link class="button" to="/paths">
        <icon-paths class="icon"></icon-paths>
        <span class="text">Paths</span>
      </nuxt-link>
      <nuxt-link class="button" to="/channels">
        <icon-channels class="icon"></icon-channels>
        <span class="text">Channels</span>
      </nuxt-link>
      <nuxt-link class="button" to="/bookmarks">
        <icon-bookmarks class="icon"></icon-bookmarks>
        <span class="text">Bookmarks</span>
      </nuxt-link>
    </div>
    <div class="user link">
      <button class="button">
        <icon-notification class="icon"></icon-notification>
      </button>
      <button class="button app">
        <icon-app class="icon"></icon-app>
      </button>
      <button class="button user">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="user profile avatar"
          class="avatar"
        />
      </button>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'LayoutTheHeader',
  data() {
    return {
      model: {
        search: null,
      },
    }
  },
  computed: {
    ...mapGetters({ search: 'search' }),
  },
  watch: {
    search(newValue) {
      this.model.search = newValue
    },
  },
  mounted() {
    this.model.search = this.search
  },
  methods: {
    ...mapActions({ setSearch: 'setSearch' }),
    submitSearch() {
      this.setSearch(this.model.search)
    },
  },
}
</script>

<style lang="postcss">
.the-header {
  @apply flex flex-row justify-between items-stretch px-2 py-1 space-x-4 bg-gray-800 text-sm text-gray-400;
}
.the-header > .logo {
  @apply flex flex-row justify-center items-center;
}
.the-header > .logo > .button.menu {
  @apply inline-block md:hidden;
}
.the-header > .link {
  @apply flex flex-row justify-start items-center space-x-2;
}
.the-header > .link.navi {
  @apply hidden md:flex;
}
.the-header > .link > .button {
  @apply flex flex-col justify-center items-center p-2;
}
.the-header > .link > .button > .icon {
  @apply w-6 h-6;
}
.the-header > .link > .button > .text {
  @apply text-xs;
}
.the-header > .link > .button > .avatar {
  @apply w-8 h-8 rounded-full bg-white;
}
.the-header > .search {
  @apply flex-grow flex-shrink p-2;
}
.the-header > .search > .form {
  @apply relative h-full w-full;
}
.the-header > .search > .form > .input {
  @apply bg-gray-600 rounded h-full w-full pl-8 placeholder-gray-400;
}
.the-header > .search > .form > .icon {
  @apply absolute top-1/2 left-2 transform -translate-y-1/2 w-4 h-4;
}
.the-header > .user {
  @apply border-l border-gray-700 pl-2;
}
.the-header > .user > .button.app,
.the-header > .user > .button.user {
  @apply hidden md:flex;
}
</style>
