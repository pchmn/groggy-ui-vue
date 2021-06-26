<template>
  <button
    v-ripple="disabled ? { initialOpacity: 0, finalOpacity: 0 } : ''"
    :class="rootClasses"
    :type="type"
    :disabled="disabled"
  >
    <!-- Loading spinner -->
    <g-spinner
      v-if="loading"
      v-tw="'mr-2'"
      :size="iconSize"
      :variant="iconVariant"
      :color="iconColor"
    ></g-spinner>
    <!-- Left icon -->
    <g-icon
      v-if="$slots['left-icon']"
      v-tw="'mr-1.5'"
      :size="iconSize"
      :variant="iconVariant"
      :color="iconColor"
    >
      <slot name="left-icon"></slot>
    </g-icon>
    <!-- Content -->
    <slot></slot>
    <!-- Right icon -->
    <g-icon
      v-if="$slots['right-icon']"
      v-tw="'ml-1.5'"
      :size="iconSize"
      :variant="iconVariant"
      :color="iconColor"
    >
      <slot name="right-icon"></slot>
    </g-icon>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { Variant, Size } from '@models/common-props.types';
import { useComponentClasses } from '@themes/hooks/useComponentClasses';
import GIcon from '@components/icon/Icon.vue';
import GSpinner from '@components/spinner/Spinner.vue';

export default defineComponent({
  name: 'Button',
  components: {
    GIcon,
    GSpinner,
  },
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
    loading: Boolean,
  },
  setup: (props) => {
    const rootClasses = computed(() => useComponentClasses('button', props));
    const iconSize = computed(() => {
      return props.size === 'sm'
        ? '0.9rem'
        : props.size === 'md'
        ? '1.1rem'
        : '1.4rem';
    });
    const iconVariant = computed(() => {
      return props.outlined ? props.variant : 'default';
    });
    const iconColor = computed(() => {
      return props.disabled ? 'white opacity-50' : '';
    });
    return { rootClasses, iconSize, iconVariant, iconColor };
  },
});
</script>

<style scoped></style>
