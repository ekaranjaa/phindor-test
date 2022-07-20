<template>
  <div class="p-12">
    <h1 class="mb-8 text-center text-4xl font-semibold text-blue-600">
      Verify Email
    </h1>
    <p v-if="feedback" class="mb-4 py-4 px-8 text-center text-green-500 bg-green-100">
      {{ feedback.message }}
    </p>
    <button
      class="h-16 text-lg w-full flex items-center justify-center bg-blue-800 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 text-white"
      :class="{ 'pointer-events-none opacity-50': loading }"
      :disabled="loading"
      @click="resendVerification"
    >
      <span v-if="loading" class="flex items-center">
        <spinner class="mr-2" />
        Verifying...
      </span>
      <span v-else>
        Resend Email Verification
      </span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Spinner from '@/components/Widgets/SpinnerComponent'

export default {
  name: 'VerificationPage',

  components: { Spinner },

  middleware: 'verification',

  computed: {
    ...mapGetters({
      feedback: 'authentication/feedback',
      loading: 'authentication/busy'
    })
  },

  created () {
    this.handleUrl()
  },

  methods: {
    ...mapActions({
      resendVerification: 'authentication/resendVerification',
      verifyEmail: 'authentication/verifyEmail'
    }),

    handleUrl () {
      const verificationUrl = this.$route.query.verificationUrl
      if (!verificationUrl) {
        return
      }
      this.verifyEmail(verificationUrl)
    }
  }
}
</script>
