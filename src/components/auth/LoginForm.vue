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
import { useRouter } from 'vue-router' // ✅ import router

const $q = useQuasar()
const router = useRouter() // ✅ use router instance
const auth = useAuthStore()

const form = ref({ email: '', password: '' })

async function onLogin() {
  const res = await auth.login(form.value)

  if (res.success) {
    $q.notify({ type: 'positive', message: 'Login successful' })
    router.push('/admin') // ✅ redirect after success
  } else {
    $q.notify({ type: 'negative', message: res.error?.error || 'Login failed' })
  }
}
</script>
