<template>
  <div class="relative inline-block">
    <button
      class="tech-broo-dropdown-button"
      @click="toggleDropdown"
      style="outline: none"
    >
      <div class="flex items-center">
        {{ selectedValue || placeholder }}
        <img
          class="ml-4 mt-1"
          src="~/assets/images/dropdown_caret_icon.svg"
          alt="caret"
        />
      </div>
    </button>
    <ul class="tech-broo-dropdown-options" v-if="isDropdownOpen">
      <li
        class=""
        v-for="(value, i) in values"
        :key="i"
        :value="value"
        @click="handleClick"
      >
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    isDropdownOpen: false,
    selectedValue: undefined,
  }),
  props: {
    values: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    handleClick(e) {
      if (e.target.innerText === 'All') {
        this.selectedValue = undefined
        this.$emit('select-option', e, '')
      } else {
        this.selectedValue = e.target.innerText
        this.$emit('select-option', e, e.target.innerText)
      }
      this.toggleDropdown()
    },
  },
}
</script>

<style scoped>
.tech-broo-dropdown-button {
  background: #f8f8f8;
  border: 1.5px solid #e5e5e5;
  border-radius: 8px;
  color: #9a9a9a;
  padding: 12px 20px;
  font-size: 1rem;
}
.tech-broo-dropdown-options {
  background-color: white;
  margin-top: 10px;
  border-radius: 8px;
  padding: 10px 0px;
  position: absolute;
  width: 100%;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}
.tech-broo-dropdown-options li {
  padding: 4px 10px;
  transition: 0.3s;
  cursor: pointer;
  color: #1b1b1b;
}
.tech-broo-dropdown-options li:hover {
  background-color: #dbefef;
}
</style>
