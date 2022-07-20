<template>
  <div class="p-12">
    <h1 class="mb-4 text-center text-4xl font-semibold text-blue-600">
      Welcome
    </h1>
    <div class="mb-8 text-center">
      <p class="text-lg font-medium">
        {{ $auth.user.first_name }} {{ $auth.user.another_name }}
      </p>
      <p class="text-sm text-gray-500">
        {{ $auth.user.email }}
      </p>
    </div>
    <button
      class="p-4 font-medium mx-auto flex items-center justify-center hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-0"
      @click="logout"
    >
      <spinner v-if="loading" color="blue" />
      <span v-else class="flex items-center">
        <logout-icon class="mr-1" width="24" height="24" />
        Logout
      </span>
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Spinner from '@/components/Widgets/SpinnerComponent'
import LogoutIcon from '@/components/icons/LogoutIcon'

export default {
  name: 'HomePage',

  components: {
    LogoutIcon,
    Spinner
  },

  middleware: 'verification',

  computed: {
    ...mapGetters({
      loading: 'authentication/busy'
    })
  },

  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>
