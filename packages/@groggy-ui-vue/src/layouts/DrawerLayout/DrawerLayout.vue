<template>
  <div class="flex flex-row relative">
    <g-card
      v-if="!matches"
      v-tw="'fixed top-0 h-14 w-full rounded-t-none items-center px-3 py-2'"
      padding="none"
    >
      <div class="flex flex-row items-center">
        <g-icon-button id="openDrawerButton" @click="toggle">
          <svg
            v-tw="'w-8 h-8'"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </g-icon-button>
        <div v-tw="'flex-grow inline-flex items-center ml-4'">
          <slot name="mobile-header" />
        </div>
      </div>
    </g-card>

    <div v-tw="!matches ? 'w-0' : 'mb-2 ml-2 mt-2'">
      <slot name="drawer" />
    </div>

    <div v-tw="['flex-grow m-2', { 'mt-16': !matches }]">
      <div v-tw="!matches ? 'w-0' : ''">
        <slot name="header" />
      </div>
      <slot name="container" />
    </div>
  </div>
</template>

<script lang="ts">
import { GCard, GIconButton } from '@components/index';
import { useDrawer, useMediaQuery } from '@hooks/index';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GDrawerLayout',
  components: {
    GIconButton,
    GCard,
  },
  setup: () => {
    const { matches } = useMediaQuery('lg', 'up');
    const { toggle } = useDrawer();

    return { matches, toggle };
  },
});
</script>

<style scoped></style>
