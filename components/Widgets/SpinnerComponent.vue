<template>
  <div
    class="spinner rounded-full animate-spin"
    :class="{
      [`border-${color}-500`]: color,
      'h-5 w-5 border-2': size === 'mini',
      'h-8 w-8 border-2': size === 'medium',
      'h-10 w-10 border-4': size === 'large'
    }"
  />
</template>

<script>
export default {
  name: 'SpinnerComponent',

  props: {
    size: {
      type: String,
      default: 'mini'
    },

    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style scoped>
.spinner {
  border-top-color: transparent;
}
</style>
