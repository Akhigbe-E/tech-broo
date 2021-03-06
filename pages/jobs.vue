<template>
  <div class="min-h-screen">
    <div class="header-two w-full h-24 sm:h-44"></div>
    <div
      class="mx-auto -mt-6 sm:-mt-10 container px-5"
      style="max-width: 905px"
    >
      <search-field />
      <div class="mt-5 sm:mt-8 mb-14 sm:mb-32 flex justify-between sm:block">
        <drop-down
          placeholder="Filter job type"
          :values="['Full time', 'All']"
          @select-option="handleJobTypeSelected"
        />
        <drop-down
          class="ml-0 sm:ml-8"
          placeholder="Filter location"
          :values="['Anywhere', 'Remote']"
          @select-option="handleLocationSelected"
        />
      </div>
    </div>
    <div
      v-if="!jobs.length && !$fetchState.pending && searchString"
      class="my-8 text-center"
    >
      <img
        class="mx-auto"
        src="~/assets/images/not_found.svg"
        alt="not found"
      />
      <div>
        <p class="text-xl font-medium mb-3">
          No Search Results for “{{ searchString }}”
        </p>
        <p class="font-normal text-lg mb-4">Try other key words</p>
        <button
          class="rounded-lg px-9 py-3"
          style="color: #1f9e98; background-color: #f4fafa"
          @click="clearFilter"
        >
          Clear Filters
        </button>
      </div>
    </div>
    <div
      v-else-if="!jobs.length && !$fetchState.pending"
      class="my-8 text-center"
    >
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
            style="color: #1f9e98; border: 1px solid #1f9e98"
            class="px-12 py-4 text-white rounded-lg outline-none text-base font-medium"
          >
            Previous
          </button>
          <button
            @click="handleNext"
            style="color: #1f9e98; border: 1px solid #1f9e98"
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
      ).then((res) => {
        return res.json().then((data) => data.map((job) => new Jobs(job)))
      })
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
    clearFilter() {
      let query = Object.assign({}, this.$route.query)
      delete query.search
      this.$router.replace({ query })
      this.searchString = ''
      this.fullTime = false
      this.location = ''
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
