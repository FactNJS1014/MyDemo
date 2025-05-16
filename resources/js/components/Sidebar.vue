<template>
  <nav class="fixed z-10 w-full p-3 bg-white shadow-lg">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center flex-shrink-0">
            <img class="w-auto h-8" src="https://tailwindflex.com/images/logo.svg" alt="Logo" />
            <span class="ml-2 text-2xl font-bold text-gray-800">Company</span>
          </router-link>

          <!-- Desktop Menu -->
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <router-link
              v-for="item in menuItems"
              :key="item.name"
              :to="item.path"
              class="inline-flex items-center px-1 pt-1 text-lg font-bold "
              active-class="text-blue-900 border-b-2 border-blue-500"
              exact-active-class="text-gray-900 border-indigo-500"
                :class="item.icon ? 'text-gray-900 bg' : 'text-gray-500 hover:text-gray-700'"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- Right Buttons -->
        <div class="flex items-center">
          <div class="hidden md:ml-4 md:flex md:items-center">
            <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
              Sign Up
            </button>
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
      <div class="pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          class="block py-2 pl-3 pr-4 text-base font-medium border-l-4"
          active-class="text-indigo-700 border-indigo-500 bg-indigo-50"
          exact-active-class="text-indigo-700 border-indigo-500 bg-indigo-50"
        >
          {{ item.name }}
        </router-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <button
            class="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            Sign Up
          </button>
        </div>
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
  { name: 'Home', path: '/'},
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]
</script>
