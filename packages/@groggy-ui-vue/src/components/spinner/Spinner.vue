<template>
  <div :class="`loader ${classes}`" :style="{ height: size, width: size }">
    <svg class="circular" viewBox="25 25 50 50">
      <circle
        class="path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
        stroke-miterlimit="10"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { Variant } from '@models/common-props.types';
import { useComponentClasses } from '@themes/hooks/useComponentClasses';
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Spinner',
  props: {
    variant: {
      type: String as PropType<Variant>,
      default: 'default',
    },
    color: String,
    size: {
      type: String,
      default: '1.5rem',
    },
  },
  setup: (props) => {
    console.log('props spinner', props);
    const classes = computed(() => useComponentClasses('spinner', props));
    return { classes };
  },
});
</script>

<style scoped>
.loader {
  position: relative;
}

.loader:before {
  content: '';
  display: block;
  padding-top: 100%;
}
.circular {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
</style>
