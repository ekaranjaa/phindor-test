<template>
  <div class="grid place-items-center bg-gray-50">
    <div class="p-12 h-screen flex flex-col max-w-xl w-full mx-auto bg-white">
      <header class="text-center">
        <h1 class="mb-2 text-4xl font-thin text-blue-500">
          Hello
        </h1>
        <p class="title text-blue-500 capitalize">
          Take control of your business
        </p>
      </header>
      <div class="mt-16">
        <h2 class="mb-12 text-center text-4xl font-semibold text-blue-600">
          Welcome Back
        </h2>
        <form class="my-auto" @submit.prevent="submitForm">
          <div class="mb-4">
            <input
              v-model="form.email"
              type="email"
              placeholder="Email"
              required
              class="p-4 block border-0 border-gray-300 w-full border-b focus:outline-none focus:ring-0"
            >
            <span v-if="serverErrors && serverErrors.email" class="text-sm text-red-500">{{ serverErrors.email[0] }}</span>
          </div>
          <div class="mb-4">
            <input
              v-model="form.password"
              type="password"
              placeholder="Password"
              required
              class="p-4 block border-0 border-gray-300 w-full border-b focus:outline-none focus:ring-0"
            >
            <span v-if="serverErrors && serverErrors.password" class="text-sm text-red-500">{{ serverErrors.password[0] }}</span>
          </div>
          <button
            class="mt-12 h-16 text-lg flex items-center justify-center w-full block bg-blue-800 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 text-white"
            :class="{ 'pointer-events-none opacity-50': loading }"
            :disabled="loading"
          >
            <spinner v-if="loading" />
            <span v-else>
              Login
            </span>
          </button>
        </form>
      </div>
      <footer class="mt-auto text-center">
        <p class="mb-3">
          Don't have an account?
        </p>
        <nuxt-link to="/register" class="font-medium underline hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-0">
          Register
        </nuxt-link>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Spinner from '@/components/Widgets/SpinnerComponent'

export default {
  name: 'LoginPage',

  components: { Spinner },

  auth: 'guest',

  data () {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },

  head () {
    return {
      title: `${process.env.appName} - Login`
    }
  },

  computed: {
    ...mapGetters({
      loading: 'authentication/busy',
      serverErrors: 'authentication/errors'
    })
  },

  created () {
    this.clearServerErrors()
  },

  methods: {
    ...mapActions({
      login: 'authentication/login',
      clearServerErrors: 'authentication/clearErrors'
    }),

    submitForm () {
      this.login(this.form)
    }
  }
}
</script>
