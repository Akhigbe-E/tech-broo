<template>
  <div class="tech-broo-search">
    <div class="grid gap-x-5 search-layout items-center">
      <span class="">
        <img
          src="~/assets/images/search_icon.svg"
          class="w-5 h-5 sm:w-6 sm:h-6"
          alt="search"
        />
      </span>
      <input v-model="query" type="text" class="text-lg w-full font-normal" />
      <span>
        <nuxt-link
          :to="{ path: 'jobs', query: { search: query } }"
          class="search-button text-white rounded-lg hidden sm:inline-block"
        >
          Search Now
        </nuxt-link>
        <nuxt-link
          :to="{ path: 'jobs', query: { search: query } }"
          class="search-button text-white rounded-lg inline-block sm:hidden"
        >
          Go
        </nuxt-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    query: '',
  }),
}
</script>

<style scoped>
.tech-broo-search {
  background-color: #f8f8f8;
  padding: 10px 10px 10px 45px;
  width: 100%;
  border-radius: 8px;
  display: inline-block;
  cursor: text;
}
.search-layout {
  grid-template-columns: auto 1fr auto;
}
input {
  background-color: #f8f8f8;
  color: #9a9a9a;
  outline: none;
}
.search-button {
  background-color: #1f9e98;
  padding: 14px 42px;
}
@media screen and (max-width: 600px) {
  .tech-broo-search {
    padding: 5px 5px 5px 16px;
  }
  .search-button {
    padding: 14px 24px;
  }
}
</style>
