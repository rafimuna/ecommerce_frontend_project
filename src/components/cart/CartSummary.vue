<template>
  <div class="q-pa-md q-mt-xl q-mx-auto cart-summary-container">
    <q-card class="q-pa-lg shadow-2 rounded-borders">
      <div class="row items-center justify-between">
        <div class="text-h6">
          Total: <span class="text-primary">৳{{ total }}</span>
        </div>
        <q-btn
          color="primary"
          label="Proceed to Checkout"
          to="/checkout"
          unelevated
          class="q-ml-md"
        />
      </div>
    </q-card>
  </div>
</template>

<script setup>
defineProps(['total'])
</script>

<style scoped>
.cart-summary-container {
  max-width: 500px;
}
</style>
