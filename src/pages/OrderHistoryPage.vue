<template>
  <q-page class="q-pa-md">
    <order-item v-for="order in orders" :key="order.id" :order="order" />
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import OrderItem from 'components/order/OrderItem.vue'
const orders = ref([])
</script>
