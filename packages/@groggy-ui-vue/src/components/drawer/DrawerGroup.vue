<template>
  <div v-tw="'mb-5'">
    <h3 v-tw="'mb-2 text(sm uppercase black dark:white opacity-50!)'">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GDrawerGroup',
  props: {
    title: String,
  },
});
</script>

<style scoped></style>
