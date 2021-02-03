<template>
  <div
    class="px-4 py-12 absolute w-full left-0 right-0"
    style="background-color: #0b0d17; z-index: 9000"
  >
    <ul class="text-xl font-medium text-white">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/jobs">Find Jobs</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact Us</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nuxt-link-active {
  color: #00fff3;
}
li {
  margin-bottom: 50px;
}
</style>
