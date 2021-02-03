<template>
  <div class="tech-broo-search">
    <div class="grid gap-x-5 search-layout items-center">
      <span class="">
        <img src="~/assets/images/search_icon.svg" alt="search" />
      </span>
      <input v-model="query" type="text" class="text-lg w-full font-normal" />
      <span>
        <button @click="() => {}" class="search-button text-white rounded-lg">
          Search Now
        </button>
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
  /* padding-left: 45px;
  padding-right: 10px;
  padding-top: 25px;
  padding-bottom: 25px; */
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
</style>
