<template>
  <q-form @submit.prevent="submit">
    <q-input v-model="form.title" label="Title" />
    <q-input v-model="form.description" label="Description" type="textarea" />
    <q-input v-model.number="form.price" label="Price" type="number" />
    <q-input v-model="form.image" label="Image URL" />
    <q-select v-model="form.category" :options="categories" label="Category" />
    <q-btn type="submit" label="Save Product" color="primary" />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
const form = ref({ title: '', description: '', price: 0, image: '', category: '' })
const categories = ['Electronics', 'Books', 'Fashion'] // Replace with API later
function submit() {
  // emit to parent or call API
}
</script>
