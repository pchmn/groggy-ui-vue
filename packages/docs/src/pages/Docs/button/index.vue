<template>
  <g-card padding="none">
    <button-variants />
  </g-card>
  <!-- <div v-tw="'m-4'">
    <g-button variant="outlined">Button</g-button>
    <g-button>Button</g-button>
    <g-button variant="flat">Button</g-button>
  </div> -->
</template>

<script setup lang="ts">
import { GButton } from '@groggy-ui/vue';
import ButtonVariants from './button.variants.md';

console.log(ButtonVariants);
</script>

<style scoped></style>
