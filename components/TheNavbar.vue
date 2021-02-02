<template>
  <div class="nav-bg block w-full py-5 px-8">
    <div class="grid grid-cols-3 mx-auto items-center" style="max-width:1100px">
      <div class="nav-logo">
        <logo/>
      </div>
      <div class="nav-links">
        <ul class="flex justify-between text-base font-medium items-start text-white">
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
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bg{
  background-color: #0B0D17;
}
.nuxt-link-active {
  color: #00FFF3;
}
.nuxt-link-active .active-dot {
  height: 7px;
  width: 7px;
  background-color: #00FFF3;
  border-radius: 50%;
  display: block;
  margin-top: 4px;
}
</style>