<template>
  <div class="block w-full p-5 relative" style="background-color: #0b0d17">
    <div
      class="grid grid-cols-2 sm:grid-cols-3 mx-auto items-center"
      style="max-width: 1100px"
    >
      <div class="nav-logo">
        <logo />
      </div>
      <div class="nav-links hidden sm:inline-block">
        <ul
          class="flex justify-between text-base font-medium items-start text-white"
        >
          <li>
            <NuxtLink to="/">
              <span>
                <p>Home</p>
                <span class="active-dot mx-auto"></span>
              </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/jobs">
              <span>
                <p>Find Jobs</p>
                <span class="active-dot mx-auto"></span>
              </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">
              <span>
                <p>Contact Us</p>
                <span class="active-dot mx-auto"></span>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="text-right inline-block sm:hidden">
        <button
          v-if="isNavClosed"
          class="inline-block outline-none"
          @click="toggleNav"
        >
          <img src="~/assets/images/nav_burger.svg" alt="nav" />
        </button>
        <button v-else class="inline-block outline-none" @click="toggleNav">
          <img src="~/assets/images/nav_burger_close.svg" alt="nav" />
        </button>
      </div>
    </div>
    <div v-if="!isNavClosed">
      <mobile-nav />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isNavClosed: true,
    windowWidth: window.innerWidth,
  }),
  watch: {
    windowWidth() {
      if (this.windowWidth > 640) {
        this.isNavClosed = true
      }
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  methods: {
    toggleNav() {
      this.isNavClosed = !this.isNavClosed
    },
  },
}
</script>

<style scoped>
.nuxt-link-exact-active {
  color: #00fff3;
}
.nuxt-link-exact-active .active-dot {
  height: 7px;
  width: 7px;
  background-color: #00fff3;
  border-radius: 50%;
  display: block;
  margin-top: 4px;
}
</style>
