<template>
    <div class="flex flex-col items-center justify-center space-y-2">
        <span><v-icon name="fc-home" scale="5"></v-icon></span>
        <h1 class="text-4xl font-bold">Home Page</h1>
        <div class="max-w-2xl text-center">
            <p class="mt-4 text-[24px] font-bold">This is the home page of our application.</p>

        </div>

        <button @click="increment">Count is: {{ count }}</button>
    </div>

</template>
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>
