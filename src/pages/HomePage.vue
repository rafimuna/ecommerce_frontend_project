<template>
  <q-page class="q-pa-md">
    <h1>Welcome to the Shop</h1>
    <div class="row q-col-gutter-md">
      <product-card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </q-page>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from 'components/common/ProductCard.vue'
const products = ref([])
onMounted(async () => {
  // TODO: Fetch from API
})
</script>
