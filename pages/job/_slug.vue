<template>
  <div
    class="mt-6 sm:mt-9 container mx-auto px-5 min-h-screen"
    style="max-width: 1100px"
  >
    <h1 class="text-lg sm:text-4xl text-center sm:text-left font-medium mb-5">
      {{ job.title }}
    </h1>
    <div
      class="flex items-center justify-between mb-16 text-left sm:text-center sm:mb-24 flex-wrap sm:flex-nowrap"
    >
      <div class="flex items-center mb-5 sm:mb-0">
        <p
          class="rounded-lg text-base sm:text-lg px-5 py-1 inline-block tag mr-8"
        >
          <span class="flex items-center">
            <img
              src="~/assets/images/pointer_dark_icon.svg"
              alt="location"
              width="18px"
              height="auto"
              class="mr-4"
            />
            {{ job.location }}
          </span>
        </p>
        <p class="rounded-lg text-base sm:text-lg px-5 py-1 inline-block tag">
          <span class="flex items-center">
            <img
              src="~/assets/images/briefcase_icon.svg"
              alt="location"
              width="18px"
              height="auto"
              class="mr-4"
            />
            {{ job.jobType }}
          </span>
        </p>
      </div>

      <div class="inline-block mx-auto sm:mx-0">
        <div class="flex text-center">
          <img
            :src="job.companyLogo"
            width="60px"
            height="60px"
            class="rounded-full object-contain"
          />
          <button
            class="px-10 py-3 ml-7 text-white rounded-lg outline-none text-base font-medium"
            style="background-color: #1f9e98"
            @click="go"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
    <h3 class="font-semibold text-xl mb-6">Job Description</h3>
    <p
      class="mb-10 w-full"
      style="max-width: 732px"
      v-html="job.description"
    ></p>
  </div>
</template>

<script>
import { Jobs } from '~/utility'
export default {
  data: () => ({
    job: {},
  }),
  async asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
  async fetch() {
    this.job = await fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${this.slug}.json`
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json().then((data) => data.map((job) => new Jobs(job)))
        }
        throw 'Could not load'
      })
      .catch((e) => {
        window.location.href = `https://jobs.github.com/positions/${this.slug}`
      })
  },
  methods: {
    go() {
      window.location.href = this.job.companyUrl
    },
  },
}
</script>

<style scoped>
.tag {
  color: #3d3d3d;
  background-color: #f2f2f2;
}
</style>
