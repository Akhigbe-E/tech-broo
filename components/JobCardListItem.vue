<template>
  <div class="border rounded-lg border-gray-200 p-5">
    <div class="tech-broo-job-card">
      <div class="flex mb-4">
        <div class="flex items-center">
          <img :src="`${logo}`" alt="logo" class="w-10 h-10 rounded-full" />
          <p class="ml-2 text-base font-medium">{{ name }}</p>
        </div>
      </div>
      <div>
        <p class="text-xl font-medium" style="height: 70px">
          {{ title | truncateTitle }}
        </p>
      </div>
      <div>
        <p
          class="rounded-lg bg-gray-200 px-5 py-1 mb-14 inline-block"
          style="color: #3d3d3d; background-color: #f2f2f2"
        >
          {{ jobType }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img src="~/assets/images/location_icon.svg" alt="location" />
          <p class="ml-2">{{ location }}</p>
        </div>
        <div>
          <div class="flex items-center cursor-pointer">
            <p class="mr-2 tech-broo-link font-medium">View Job</p>
            <img src="~/assets/images/right_icon.svg" alt="proceed" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
  },
  filters: {
    truncateTitle(name) {
      return `${name.slice(0, 50)}${name.length > 50 ? '...' : ''}`
    },
  },
}
</script>

<style scoped>
.tech-broo-link {
  color: #1f9e98;
}
.tech-broo-link:hover {
  color: #18817c;
}
.tech-broo-job-card {
  display: grid;
  height: 100%;
  grid-template-rows: auto auto auto auto;
}
</style>
