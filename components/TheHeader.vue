<template>
  <div class="tech-broo-header mb-28">
    <div class="tech-broo-header-content">
      <div class="w-full text-center">
        <p class="text-xl mb-1" style="color: #00fff3">BECOME A TECH BRO</p>
        <h1 class="text-white font-semibold mb-8 text-4xl">
          Land your dream tech Job with ease.
        </h1>
        <div class="max-w-3xl mx-auto">
          <search-field />
          <span>
            <p class="text-lg text-white text-left mt-4">
              Popular: Fullstack Developer, Product Designer, UX Designer
            </p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.tech-broo-header {
  position: relative;
  height: 90vh;
  max-height: 744px;
  background-image: url('~assets/images/header_image.svg'),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: cover;
}

.tech-broo-header-content {
  position: absolute;
  height: 50%;
  top: 23%;
  right: 0;
  left: 0;
}
</style>
