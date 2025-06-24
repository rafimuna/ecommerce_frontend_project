<template>
  <q-form @submit.prevent="$emit('login', { email, password })">
    <q-input v-model="email" label="Email" type="email" />
    <q-input v-model="password" label="Password" type="password" />
    <q-btn type="submit" label="Login" color="primary" />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const password = ref('')
</script>
