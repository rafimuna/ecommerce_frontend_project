<template>
  <q-card class="my-card">
    <q-img :src="product.image" :alt="product.title" />
    <q-card-section>
      <div class="text-h6">{{ product.title }}</div>
      <div class="text-subtitle2">৳{{ product.price }}</div>
    </q-card-section>
    <q-card-actions>
      <q-btn color="primary" label="Add to Cart" @click="$emit('add-to-cart', product)" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps(['product'])
</script>
