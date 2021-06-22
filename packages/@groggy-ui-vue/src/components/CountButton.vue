<template>
  <button class="bg-primary-500 hover:bg-primary-700 shadow focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-50 px-5 py-2 text-white rounded-lg font-semibold transition-shadow transition-colors" @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'CountButton',
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
</style>
