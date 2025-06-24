<template>
  <q-item>
    <q-item-section>{{ item.product.title }}</q-item-section>
    <q-item-section side>
      <q-btn dense round icon="remove" @click="$emit('decrease', item)" />
      {{ item.quantity }}
      <q-btn dense round icon="add" @click="$emit('increase', item)" />
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps(['item'])
</script>
