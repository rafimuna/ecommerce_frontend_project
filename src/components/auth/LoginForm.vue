<template>
  <q-form
    @submit.prevent="onLogin"
    class="q-gutter-md q-pa-md"
    style="max-width: 400px; margin: auto"
  >
    <q-input v-model="form.email" label="Email" type="email" filled />
    <q-input v-model="form.password" label="Password" type="password" filled />
    <q-btn type="submit" label="Login" color="primary" class="full-width" />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useAuthStore } from 'stores/auth'

const $q = useQuasar()
const auth = useAuthStore()

const form = ref({ email: '', password: '' })

async function onLogin() {
  try {
    await auth.login(form.value)
    $q.notify({ type: 'positive', message: 'Login successful' })
  } catch {
    $q.notify({ type: 'negative', message: 'Login failed. Please try again.' })
  }
}
</script>
