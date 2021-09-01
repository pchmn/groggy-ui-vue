<template>
  <router-link v-slot="{ isActive, navigate, href }" :to="to" custom>
    <a :href="href">
      <g-drawer-item
        :active="isActive"
        @click="
          {
            navigate();
            toggle();
          }
        "
        ><slot
      /></g-drawer-item>
    </a>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { GDrawerItem, useDrawer } from '@groggy-ui/vue';

const { to } = defineProps<{
  to: string;
}>();

const { toggle } = useDrawer();
</script>

<style scoped></style>
