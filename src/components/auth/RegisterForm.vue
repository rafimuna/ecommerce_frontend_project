<template>
  <q-form @submit.prevent="$emit('register', form)">
    <q-input v-model="form.username" label="Username" />
    <q-input v-model="form.email" label="Email" type="email" />
    <q-input v-model="form.password" label="Password" type="password" />
    <q-btn type="submit" label="Register" color="primary" />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
const form = ref({ username: '', email: '', password: '' })
</script>
