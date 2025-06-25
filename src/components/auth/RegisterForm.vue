<template>
  <q-form @submit.prevent="onRegister" class="q-gutter-md" ref="registerForm">
    <q-input
      v-model="form.username"
      label="Username"
      filled
      lazy-rules
      :rules="[(val) => !!val || 'Username is required']"
    />

    <q-input
      v-model="form.email"
      label="Email"
      type="email"
      filled
      lazy-rules
      :rules="[
        (val) => !!val || 'Email is required',
        (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Invalid email format',
      ]"
    />

    <q-input
      v-model="form.password"
      label="Password"
      type="password"
      filled
      lazy-rules
      :rules="[(val) => !!val || 'Password is required']"
    />

    <q-btn
      type="submit"
      label="Register"
      color="primary"
      class="q-mt-md full-width"
      :loading="loading"
      :disable="loading"
    />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  username: '',
  email: '',
  password: '',
})

const loading = ref(false)
const registerForm = ref(null)

const emit = defineEmits(['register'])

function onRegister() {
  registerForm.value.validate().then((valid) => {
    if (valid) {
      loading.value = true

      // Simulate API call
      setTimeout(() => {
        emit('register', { ...form.value })
        loading.value = false
      }, 1000)
    }
  })
}
</script>
