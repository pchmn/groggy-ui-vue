<template>
  <i :class="classes" :style="{ height: size, width: size }">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import { Variant } from '@models/common-props.types';
import { useComponentClasses } from '@themes/hooks/useComponentClasses';
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Icon',
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
    const classes = computed(() => useComponentClasses('icon', props));
    return { classes };
  },
});
</script>

<style scoped>
i >>> svg {
  width: 100%;
  height: 100%;
  display: inherit;
}
</style>
