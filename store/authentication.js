/* eslint-disable no-console */
export const state = () => ({
  busy: false,
  feedback: null,
  errors: null
})

export const getters = {
  busy: state => state.busy,
  feedback: state => state.feedback,
  errors: state => state.errors
}

export const mutations = {
  IS_BUSY (state, payload) {
    state.busy = payload
  },

  SET_FEEDBACK (state, payload) {
    state.feedback = payload
  },

  SET_ERRORS (state, payload) {
    state.errors = payload
  }
}

export const actions = {
  clearErrors ({ commit }) {
    return commit('SET_ERRORS', null)
  },

  async login ({ commit }, user) {
    commit('SET_ERRORS', null)
    commit('IS_BUSY', true)
    try {
      await this.$auth.loginWith('local', { data: user })
    } catch (error) {
      if (error.response.status === 422) {
        return commit('SET_ERRORS', error.response.data.errors)
      }
    } finally {
      commit('IS_BUSY', false)
    }
  },

  async register ({
    commit,
    dispatch
  }, data) {
    commit('SET_ERRORS', null)
    commit('IS_BUSY', true)

    try {
      await this.$axios.post('/auth/register', data)
      dispatch('login', data)
    } catch (error) {
      if (error.response.status === 422) {
        return commit('SET_ERRORS', error.response.data.errors)
      }
    } finally {
      commit('IS_BUSY', false)
    }
  },

  async resendVerification ({ commit }) {
    commit('IS_BUSY', true)

    try {
      const response = await this.$axios.post('/email/resend-verification-notification')
      commit('SET_FEEDBACK', response.data)
    } catch (error) {
      console.log(error)
    } finally {
      commit('IS_BUSY', false)
    }
  },

  async verifyEmail ({ commit }, verificationUrl) {
    commit('IS_BUSY', true)

    try {
      const response = await this.$axios.post(verificationUrl)
      await this.$auth.fetchUser()
      await this.$router.push({ path: '/' })
      commit('SET_FEEDBACK', response.data)
    } catch (error) {
      console.log(error)
    } finally {
      commit('IS_BUSY', false)
    }
  }
}
