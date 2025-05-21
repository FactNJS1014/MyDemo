
<template>
  <nav class="fixed z-10 w-full bg-black shadow-lg h-20 border-b-4 border-blue-200">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 mt-auto">
        <div class="flex items-center gap-10">
          <router-link to="/" class="flex items-center flex-shrink-0">
            <img class="w-auto h-8" src="https://tailwindflex.com/images/logo.svg" alt="Logo" />
            <span class="ml-2 mr-3 text-[22px] font-bold text-white">Company</span>
          </router-link>
          <!-- Desktop Menu -->
          <div class="hidden md:ml-6 md:flex md:space-x-5">
             <router-link
              v-for="item in menuItems"
              :key="item.name"
              :to="item.path"
              class="inline-flex items-center px-2 py-2 text-md font-medium rounded-md hover:bg-blue-100 hover:text-blue-700 text-white"
              active-class="bg-blue-500 text-white"
              exact-active-class="bg-blue-500 text-white"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
        <!-- Right Buttons -->
        <div class="flex items-center">
          <div class="hidden md:ml-4 md:flex md:items-center">
            <span><v-icon name="md-person-round" fill="#fff" scale="1.5"></v-icon></span><span class="text-white text-[20px] ml-2">Natdanai Jansomboon</span>
          </div>
          <!-- Mobile Toggle Button -->
          <div class="flex items-center md:hidden">
            <button @click="toggleMenu" type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100">
              <span class="sr-only">Open main menu</span>
              <svg v-if="!menuOpen" class="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div class="md:hidden" v-show="menuOpen">
      <div class="pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
        <router-link
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          class="block py-2 pl-3 pr-4 text-base font-medium "
          active-class="text-indigo-700 bg-indigo-50"
          exact-active-class="text-indigo-700  bg-indigo-50"
        >
          {{ item.name }}
        </router-link>
      </div>

    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]
</script>
