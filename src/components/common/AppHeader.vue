<template>
  <q-header elevated>
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title>
        <q-btn flat to="/" label="MyShop" class="text-white" />
      </q-toolbar-title>
      <q-btn flat to="/cart" icon="shopping_cart" class="text-white" />
      <q-btn flat v-if="!isAuthenticated" to="/login" label="Login" class="text-white" />
      <q-btn flat v-if="!isAuthenticated" to="/register" label="Register" class="text-white" />
      <q-btn flat v-if="isAuthenticated" to="/orders" label="Orders" class="text-white" />
      <q-btn flat v-if="isAdmin" to="/admin" label="Admin" class="text-white" />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth' // ✅ এখন আর error হবে না
const authStore = useAuthStore()
const isAuthenticated = authStore.isAuthenticated
const isAdmin = authStore.user?.is_staff
</script>
