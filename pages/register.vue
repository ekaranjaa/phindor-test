<template>
  <div class="grid place-items-center bg-gray-50">
    <div class="p-12 h-screen flex flex-col max-w-xl w-full mx-auto bg-white">
      <header class="text-center">
        <h1 class="mb-2 text-4xl font-thin text-blue-500">
          Hello
        </h1>
        <p class="title text-blue-500">
          Take control of your business
        </p>
      </header>
      <div class="mt-16">
        <h2 class="mb-12 text-center text-4xl font-semibold text-blue-600">
          Get Started
        </h2>
        <form class="my-auto" @submit.stop>
          <input
            type="text"
            placeholder="First Name"
            required
            class="mb-4 p-4 block border-0 border-gray-300 w-full border-b focus:outline-none focus:ring-0"
          >
          <input
            type="text"
            placeholder="Another Name"
            class="mb-4 p-4 block border-0 border-gray-300 w-full border-b focus:outline-none focus:ring-0"
          >
          <input
            type="text"
            placeholder="Email/Phone"
            required
            class="mb-4 p-4 block border-0 border-gray-300 w-full border-b focus:outline-none focus:ring-0"
          >
          <input
            type="password"
            placeholder="Password"
            required
            class="mb-4 p-4 block border-0 border-gray-300 w-full border-b focus:outline-none focus:ring-0"
          >
          <button class="mt-12 h-16 text-lg w-full block bg-blue-800 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 text-white">
            Register
          </button>
        </form>
      </div>
      <footer class="mt-auto text-center">
        <p class="mb-3">
          Already have an account?
        </p>
        <nuxt-link to="/login" class="font-medium underline hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-0">
          Login
        </nuxt-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage'
}
</script>
