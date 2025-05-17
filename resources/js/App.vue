<template>
  <div>
    <Navbar />
    <div class="pt-25">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Sidebar.vue'
</script>

