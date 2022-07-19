<template>
  <div class="p-12">
    <h1 class="mb-8 text-center text-4xl font-semibold text-blue-600">
      Welcome
    </h1>
    <div class="flex items-center justify-center">
      <nuxt-link to="/login" class="p-4 font-medium underline hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-0">
        Login
      </nuxt-link>
      <nuxt-link to="/register" class="p-4 font-medium underline hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-0">
        Register
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
