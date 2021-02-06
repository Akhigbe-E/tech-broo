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
        Latest Jobs
      </h2>
    </div>
    <div class="w-full mb-20">
      <div class="text-center" v-if="!jobs.length">
        <logo class="mx-auto pr-12" />
        <p class="status-text">Loading...</p>
      </div>
      <p v-else-if="$fetchState.error" class="status-text">
        Kindly refresh to see the latest jobs
      </p>
      <div v-else>
        <job-card-list class="mb-20" :jobs="jobs" />
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
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { Jobs } from '~/utility'
export default {
  components: { Logo },
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
</script>

<style scoped>
.status-text {
  color: #1f9e98;
  text-align: center;
  font-size: 1.125rem;
}
</style>
