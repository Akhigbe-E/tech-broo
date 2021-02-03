<template>
  <nuxt-link
    class="px-12 py-4 text-white rounded-lg outline-none text-base font-medium"
    style="background-color: #1f9e98"
    :to="`${to}`"
  >
    {{ value }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
