<template>
  <div :class="rootClasses">
    <!-- <slot /> -->
    <h2 v-if="title" :class="tw(theme.value.components.card.title)">
      {{ title }}
    </h2>
    <div class="flex-grow">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { useTheme } from '@themes/hooks/useTheme';
import { tw } from 'twind';
import { Size } from '@models/common-props.types';

export default defineComponent({
  name: 'Card',
  props: {
    title: String,
    outlined: Boolean,
    padding: {
      type: String as PropType<Size | 'none'>,
      default: 'md',
    },
  },
  setup: (props) => {
    const { theme } = useTheme();
    const rootClasses = computed(() => [
      tw(theme.value.components.card.base),
      { [`${tw(theme.value.components.card.outlined)}`]: props.outlined },
      {
        [`${tw(theme.value.components.card[props.padding as Size])}`]:
          props.padding !== 'none',
      },
    ]);
    return { rootClasses, theme, tw };
  },
});
</script>

<style scoped></style>
