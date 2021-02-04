<template>
  <div class="min-h-screen">
    <div class="header-two w-full h-44"></div>
    <div class="mx-auto -mt-20 sm:-mt-10" style="max-width: 905px">
      <search-field />
      <div class="mt-8 mb-32">
        <drop-down
          placeholder="Filter job type"
          :values="['Full time', 'All']"
          @select-option="handleJobTypeSelected"
        />
        <drop-down
          class="ml-8"
          placeholder="Filter location"
          :values="['Anywhere', 'Remote']"
          @select-option="handleLocationSelected"
        />
      </div>
    </div>
    <div v-if="!jobs.length" class="my-8 text-center">
      <logo class="mx-auto pr-12" />
      <p class="status-text">Loading...</p>
    </div>
    <div v-else-if="$fetchState.error" class="status-text">
      <p>Kindly refresh this page</p>
    </div>
    <div v-else>
      <job-card-list :jobs="jobs" />
      <div class="w-full text-center my-8">
        <div class="inline-block">
          <button
            @click="handlePrevious"
            style="background-color: #1f9e98"
            class="px-12 py-4 text-white rounded-lg outline-none text-base font-medium"
          >
            Previous
          </button>
          <button
            @click="handleNext"
            style="background-color: #1f9e98"
            class="px-12 py-4 text-white rounded-lg outline-none text-base font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { Jobs } from '~/utility'
export default {
  components: { Logo },
  data: () => ({
    page: 1,
    jobs: [],
    fullTime: false,
    location: '',
  }),
  async fetch() {
    this.fetchJobs()
  },
  async asyncData({ query }) {
    const searchString = query.search
    return { searchString }
  },
  watch: {
    $route(to, from) {
      this.searchString = to.query.search
      this.fetchJobs()
    },
  },
  methods: {
    async fetchJobs() {
      this.jobs = await fetch(
        `https://github-jobs.glitch.me/positions.json?page=${this.page}${
          this.fullTime ? `&full_time=true` : ``
        }${this.location.length ? `&location=${this.location}` : ``}${
          this.searchString ? `&search=${this.searchString}` : ``
        }`
      )
        .then((res) => res.json())
        .then((data) => data.map((job) => new Jobs(job)))
    },
    handleJobTypeSelected(e, value) {
      this.fullTime = value === 'Full time'
      this.fetchJobs()
    },
    handleLocationSelected(e, value) {
      this.location = value === 'Anywhere' ? '' : value
      this.fetchJobs()
    },
    handleNext() {
      this.page += 1
      this.fetchJobs()
    },
    handlePrevious() {
      if (this.page === 1) return
      this.page -= 1
      this.fetchJobs()
    },
  },
}
</script>

<style scoped>
.header-two {
  background-image: url('~assets/images/jobs_header_image.svg');
  background-color: #dbefef;
}
.status-text {
  color: #1f9e98;
  text-align: center;
  font-size: 1.125rem;
}
</style>
