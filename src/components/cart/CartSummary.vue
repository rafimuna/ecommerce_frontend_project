<template>
  <div class="text-right q-pa-md">
    <div class="text-h6">Total: ৳{{ total }}</div>
    <q-btn color="primary" label="Checkout" to="/checkout" />
  </div>
</template>

<script setup>
defineProps(['total'])
</script>
