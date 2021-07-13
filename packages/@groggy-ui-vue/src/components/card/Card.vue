<template>
  <div :class="rootClasses">
    <h2 v-if="title" :class="tw(theme.theme.components.card.title)">
      {{ title }}
    </h2>
    <div class="flex-grow">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useTheme } from '@themes/hooks/useTheme';
import { tw } from 'twind';

export default defineComponent({
  name: 'Card',
  props: {
    title: String,
    outlined: Boolean,
  },
  setup: (props) => {
    const { theme } = useTheme();
    const rootClasses = computed(() => [
      tw(theme.theme.components.card.base),
      { [`${tw(theme.theme.components.card.outlined)}`]: props.outlined },
    ]);
    return { rootClasses, theme, tw };
  },
});
</script>

<style scoped></style>
