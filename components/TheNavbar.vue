<template>
  <div class="nav-bg block w-full py-5 px-8">
    <div class="grid grid-cols-3 mx-auto" style="max-width:1100px">
      <div class="nav-logo">
        <logo/>
      </div>
      <div class="nav-links">
        <ul class="flex justify-between text-base font-medium items-center text-white">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Find Jobs</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Contact Us</NuxtLink>
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

</style>