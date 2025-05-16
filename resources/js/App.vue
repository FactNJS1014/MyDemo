<template>
  <div>
    <Navbar />
    <div class="pt-20">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Sidebar.vue'
</script>

