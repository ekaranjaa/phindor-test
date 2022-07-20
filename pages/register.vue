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
          Get Started
        </h2>
        <form class="my-auto" @submit.prevent="submitForm">
          <div class="mb-4">
            <input
              v-model="form.first_name"
              type="text"
              placeholder="First Name"
              required
              class="p-4 block border-0 border-gray-300 w-full border-b focus:outline-none focus:ring-0"
            >
            <span v-if="serverErrors && serverErrors.first_name" class="text-sm text-red-500">{{ serverErrors.first_name[0] }}</span>
          </div>
          <div class="mb-4">
            <input
              v-model="form.another_name"
              type="text"
              placeholder="Another Name"
              class="p-4 block border-0 border-gray-300 w-full border-b focus:outline-none focus:ring-0"
            >
            <span v-if="serverErrors && serverErrors.another_name" class="text-sm text-red-500">{{ serverErrors.another_name[0] }}</span>
          </div>
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
          <div class="mb-4">
            <input
              v-model="form.password_confirmation"
              type="password"
              placeholder="Confirm Password"
              required
              class="p-4 block border-0 border-gray-300 w-full border-b focus:outline-none focus:ring-0"
            >
          </div>
          <button
            class="mt-12 h-16 text-lg flex items-center justify-center w-full block bg-blue-800 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 text-white"
            :class="{ 'pointer-events-none opacity-50': loading }"
            :disabled="loading"
          >
            <spinner v-if="loading" />
            <span v-else>
              Register
            </span>
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
import { mapGetters, mapActions } from 'vuex'
import Spinner from '@/components/Widgets/SpinnerComponent'

export default {
  name: 'RegisterPage',

  components: { Spinner },

  auth: 'guest',

  data () {
    return {
      form: {
        first_name: null,
        another_name: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    }
  },

  head () {
    return {
      title: `${process.env.appName} - Register`
    }
  },

  computed: {
    ...mapGetters({
      loading: 'authentication/busy',
      serverErrors: 'authentication/errors'
    })
  },

  mounted () {
    this.clearServerErrors()
  },

  methods: {
    ...mapActions({
      register: 'authentication/register',
      clearServerErrors: 'authentication/clearErrors'
    }),

    submitForm () {
      this.register(this.form)
    }
  }
}
</script>
