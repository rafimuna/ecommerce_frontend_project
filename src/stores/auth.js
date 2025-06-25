// src/stores/auth.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from 'boot/axios'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const accessToken = ref(null)
  const refreshToken = ref(null)
  const isAuthenticated = ref(false)

  // ✅ REGISTER API
  async function register({ username, email, password }) {
    try {
      const res = await api.post('auth/register/', {
        username,
        email,
        password,
        password2: password, // তোমার serializer-এ password2 চায়
      })

      accessToken.value = res.data.access
      refreshToken.value = res.data.refresh
      isAuthenticated.value = true
      user.value = { username, email }

      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`
      return { success: true }
    } catch (err) {
      return { success: false, error: err.response.data }
    }
  }

  // ✅ LOGIN API
  async function login({ username, password }) {
    try {
      const res = await api.post('auth/login/', { username, password })

      accessToken.value = res.data.access
      refreshToken.value = res.data.refresh
      isAuthenticated.value = true
      user.value = { username }

      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`
      return { success: true }
    } catch (err) {
      return { success: false, error: err.response.data }
    }
  }

  function logout() {
    user.value = null
    accessToken.value = null
    refreshToken.value = null
    isAuthenticated.value = false
    delete api.defaults.headers.common['Authorization']
  }

  return {
    user,
    accessToken,
    refreshToken,
    isAuthenticated,
    register,
    login,
    logout,
  }
})
