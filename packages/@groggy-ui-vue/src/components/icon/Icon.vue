<template>
  <i :class="classes" :style="`--height: ${size}; --width: ${size}`">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import { Color } from '@models/common-props.types';
import { useComponentClasses } from '@themes/hooks/useComponentClasses';
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Icon',
  props: {
    color: String as PropType<Color>,
    colorShade: Number,
    size: {
      type: String,
      default: '1.5rem',
    },
  },
  setup: (props) => {
    const classes = computed(() => useComponentClasses('icon', props));
    return { classes };
  },
});
</script>

<style scoped>
i >>> svg {
  width: var(--height);
  height: var(--width);
  display: inherit;
}
</style>
