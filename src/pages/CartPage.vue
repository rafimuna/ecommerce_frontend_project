<template>
  <q-page class="q-pa-md">
    <cart-item v-for="item in cartItems" :key="item.id" :item="item" />
    <cart-summary :total="total" />
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import CartItem from 'components/cart/CartItem.vue'
import CartSummary from 'components/cart/CartSummary.vue'
const cartItems = ref([])
const total = ref(0)
</script>
