<template>
  <button
    v-ripple="disabled ? { initialOpacity: 0, finalOpacity: 0 } : ''"
    :class="rootClasses"
    :type="type"
    :disabled="disabled"
  >
    <!-- <div
      :class="`animate-spin
        loader
        ease-linear
        rounded-full
        border-4 border-t-4 border-${variant}-200
        h-5
        w-5
        mr-3`"
    ></div> -->
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, computed } from 'vue';
import { Variant, Size } from '@models/common-props.types';
import { useTheme } from '@themes/useTheme';

export default defineComponent({
  name: 'Button',
  props: {
    variant: {
      type: String as PropType<Variant>,
      default: 'default',
    },
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button',
    },
    outlined: Boolean,
    disabled: Boolean,
    round: Boolean,
  },
  setup: (props) => {
    const { theme } = useTheme();
    const rootClasses = computed(() => [
      theme.components.button.base,
      theme.components.button[props.size],
      props.disabled
        ? theme.components.button.disabled
        : props.outlined
        ? theme.components.button.variantOutlined(props.variant)
        : theme.components.button.variant(props.variant),
      {
        [`${theme.components.button.round}`]: props.round,
      },
    ]);
    return { rootClasses };
  },
});
</script>

<style scoped></style>
