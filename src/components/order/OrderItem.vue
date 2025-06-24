<template>
  <q-item>
    <q-item-section>{{ item.product.title }} (x{{ item.quantity }})</q-item-section>
  </q-item>
</template>

<script setup>
defineProps(['item'])
</script>
