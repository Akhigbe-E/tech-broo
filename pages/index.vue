<template>
  <div class="">
    <the-header />
    <div class="text-center mb-11 sm:mb-16">
      <p class="text-lg font-medium sm:text-xl mb-3" style="color: #1f9e98">
        Over 500+ Jobs
      </p>
      <h2
        class="text-2xl font-semibold sm:text-3xl mb-3"
        style="color: #18191f"
      >
        Featured Jobs
      </h2>
    </div>
    <div class="w-full mb-20">
      <job-card-list />
    </div>
    <div class="mb-28 text-center">
      <nuxt-link
        style="border: 1.5px solid #1f9e98; color: #1f9e98"
        class="rounded-lg px-9 py-6 inline-block"
        to="/jobs"
      >
        <div class="flex">
          <p class="mr-2 font-medium">Explore more jobs</p>
          <img src="~/assets/images/right_icon.svg" alt="proceed" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
