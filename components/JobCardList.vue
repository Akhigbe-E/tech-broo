<template>
  <div
    class="grid gap-x-12 gap-y-12 grid-cols-1 sm:grid-cols-3 container mx-auto px-5 sm:gap-y-20"
    style="max-width: 1100px"
  >
    <job-card-list-item
      v-for="job in jobs"
      :key="job.id"
      :id="job.id"
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
  data: () => ({
    jobs: [],
  }),
  async fetch() {
    this.jobs = await fetch(
      'https://github-jobs.glitch.me/positions.json?page=1'
    )
      .then((res) => res.json())
      .then((data) => data.slice(0, 9).map((job) => new Jobs(job)))
  },
}
class Jobs {
  constructor({
    id,
    type,
    created_at,
    company,
    company_url,
    company_logo,
    location,
    title,
  }) {
    this.id = id
    ;(this.jobType = type), (this.companyName = company)
    this.location = location
    this.title = title
    this.createdAt = created_at
    this.companyUrl = company_url
    this.companyLogo = company_logo
  }
}
</script>

<style></style>
