<template>
  <div
    class="grid gap-x-12 gap-y-12 grid-cols-1 sm:grid-cols-3 container mx-auto px-5 sm:gap-y-20"
    style="max-width: 1100px"
  >
    <job-card-list-item
      v-for="job in jobs"
      :key="job.id"
      :name="job.companyName"
      :title="job.title"
      :jobType="job.jobType"
      :location="job.location"
      :logo="job.companyLogo"
    />
  </div>
</template>

<script>
export default {
  props: {
    jobs: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
