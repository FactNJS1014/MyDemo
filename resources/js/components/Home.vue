<template>
    <div class="flex flex-col items-center justify-center space-y-2">
        <span><v-icon name="fc-home" scale="5"></v-icon></span>
        <h1 class="text-4xl font-bold">Home Page</h1>
        <div class="max-w-2xl text-center">
            <p class="mt-4 text-[24px] font-bold">This is the home page of our application.</p>

        </div>

        <p>Count is: {{ count }}</p>
        <a-float-button  @click="handleClick" :style="{
            right: '94px',
            width: '80px',
            height: '80px',
        }"/>
    </div>

</template>
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function handleClick() {
  count.value++
   console.log(`The initial count is ${count.value}.`)
}


</script>
