<template>
  <button @click="count++">count is: {{ count }}</button>
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
button {
  background-color: #42b983;
  border-radius: 2rem;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
button:hover {
  background-color: #42b983b6;
}
</style>
