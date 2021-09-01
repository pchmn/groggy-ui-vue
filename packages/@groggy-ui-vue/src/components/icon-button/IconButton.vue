<template>
  <button v-ripple :class="classes">
    <g-icon
      :color="computedColor"
      :color-shade="colorShade"
      :size="computedSize"
    >
      <slot />
    </g-icon>
  </button>
</template>

<script lang="ts">
import useIconButtonClasses from '@components/icon-button/useIconButtonClasses';
import { GIcon } from '@components/index';
import { Color, Size, Variant } from '@models/common-props.types';
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'GIconButton',
  components: {
    GIcon,
  },
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'neutral',
    },
    colorShade: Number,
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
    round: {
      type: Boolean,
      default: true,
    },
    variant: {
      type: String as PropType<Variant>,
      default: 'standard',
    },
  },
  setup: (props) => {
    const classes = useIconButtonClasses(props);
    const computedColor = computed(() =>
      props.color === 'neutral' ? 'white' : props.color
    );
    const computedSize = computed(() => {
      return props.size === 'sm'
        ? '1rem'
        : props.size === 'md'
        ? '1.7rem'
        : '2rem';
    });
    return { classes, computedSize, computedColor };
  },
});
</script>

<style scoped></style>
