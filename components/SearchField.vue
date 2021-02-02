<template>
  <div class="tech-broo-search">
    <div class="flex items-center">
      <span class="mr-5">
        <img src="~/assets/images/search_icon.svg" alt="search" />
      </span>
      <input type="text" class="text-lg font-normal" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.tech-broo-search {
  background-color: #f8f8f8;
  padding-left: 45px;
  padding-top: 25px;
  padding-bottom: 25px;
  width: 100%;
  border-radius: 8px;
  display: inline-block;
  cursor: text;
}
input {
  background-color: #f8f8f8;
  color: #9a9a9a;
  outline: none;
}
</style>
