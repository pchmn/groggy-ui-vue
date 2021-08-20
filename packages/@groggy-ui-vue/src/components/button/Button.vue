<template>
  <button
    v-ripple="disabled ? { initialOpacity: 0, finalOpacity: 0 } : ''"
    v-tw="fullWidth ? 'w-full' : ''"
    :class="rootClasses"
    :type="type"
    :disabled="disabled"
    :style="cssVars"
  >
    <!-- Loading spinner -->
    <g-spinner
      v-if="loading"
      v-tw="'mr-2'"
      :size="iconSize"
      :color="iconColor"
    ></g-spinner>
    <!-- Left icon -->
    <g-icon
      v-if="$slots['left-icon']"
      v-tw="'mr-1.5'"
      :size="iconSize"
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
      :color="iconColor"
    >
      <slot name="right-icon"></slot>
    </g-icon>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, CSSProperties } from 'vue';
import { Color, Size, Variant } from '@models/common-props.types';
import { useComponentClasses } from '@themes/hooks/useComponentClasses';
import GIcon from '@components/icon/Icon.vue';
import GSpinner from '@components/spinner/Spinner.vue';
import { useTheme } from '@themes/hooks/useTheme';
import { getThemeColor, shadeColor } from '@themes/utils';

export default defineComponent({
  name: 'Button',
  components: {
    GIcon,
    GSpinner,
  },
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'primary',
    },
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
    variant: {
      type: String as PropType<Variant | 'flat'>,
      default: 'standard',
    },
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button',
    },
    disabled: Boolean,
    round: Boolean,
    loading: Boolean,
    fullWidth: Boolean,
  },
  setup: (props) => {
    const { theme } = useTheme();
    const cssVars = computed(() => {
      return {
        '--hover-color': shadeColor(
          getThemeColor(theme.value, props.color),
          15
        ),
      };
    }) as CSSProperties;
    const rootClasses = computed(() => useComponentClasses('button', props));
    const iconSize = computed(() => {
      return props.size === 'sm'
        ? '0.9rem'
        : props.size === 'md'
        ? '1.1rem'
        : '1.4rem';
    });
    const iconColor = computed(() => {
      return props.variant !== 'standard' && !props.disabled
        ? props.color
        : 'white';
    });
    return {
      rootClasses,
      iconSize,
      iconColor,
      cssVars: cssVars as CSSProperties,
    };
  },
});
</script>

<style scoped>
button:not(.outlined):not(.flat):not(:disabled):hover,
button:not(.outlined):not(.flat):focus {
  background-color: var(--hover-color);
}
</style>
