<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <AppHeader />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-center bg-grey-2">
      <AppFooter />
    </q-footer>
  </q-layout>
</template>

<script setup>
import AppHeader from 'components/common/AppHeader.vue'
import AppFooter from 'components/common/AppFooter.vue'
</script>
