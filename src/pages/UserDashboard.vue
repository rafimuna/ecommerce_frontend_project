<template>
  <q-page class="q-pa-md">
    <h2>User Dashboard</h2>
    <payout-status :requests="requests" />
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import PayoutStatus from 'components/payout/PayoutStatus.vue'
const requests = ref([])
</script>
