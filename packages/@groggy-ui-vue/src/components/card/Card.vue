<template>
  <div :class="rootClasses">
    <h2 v-if="title" :class="theme.components.card.title">{{ title }}</h2>
    <div class="flex-grow">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, computed } from 'vue';
import { Variant, Size } from '@models/common-props.types';
import { useTheme } from '@themes/useTheme';

export default defineComponent({
  name: 'Card',
  props: {
    title: String,
    outlined: Boolean,
  },
  setup: (props) => {
    const { theme } = useTheme();
    const rootClasses = computed(() => [
      theme.components.card.base,
      { [`${theme.components.card.outlined}`]: props.outlined },
    ]);
    return { rootClasses, theme };
  },
});
</script>

<style scoped></style>
