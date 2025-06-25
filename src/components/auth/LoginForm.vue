<template>
  <q-form @submit.prevent="onLogin" class="q-gutter-md" ref="loginForm">
    <q-input
      v-model="email"
      label="Email"
      type="email"
      filled
      lazy-rules
      :rules="[
        (val) => !!val || 'Email is required',
        (val) => /.+@.+\..+/.test(val) || 'Enter a valid email',
      ]"
    />

    <q-input
      v-model="password"
      label="Password"
      type="password"
      filled
      lazy-rules
      :rules="[(val) => !!val || 'Password is required']"
    />

    <q-btn
      type="submit"
      label="Login"
      color="primary"
      class="q-mt-md full-width"
      :loading="loading"
      :disable="loading"
    />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const loading = ref(false)
const loginForm = ref(null)

const onLogin = () => {
  loginForm.value.validate().then((valid) => {
    if (valid) {
      loading.value = true

      // Emit login event to parent
      setTimeout(() => {
        loading.value = false(
          // You can replace this setTimeout with real API logic
          'login',
          {
            email: email.value,
            password: password.value,
          },
        )
      }, 1000)
    }
  })
}
</script>
