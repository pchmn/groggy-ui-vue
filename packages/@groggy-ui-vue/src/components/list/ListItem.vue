<template>
  <li v-ripple :class="[classes.default, { [classes.active]: active }]">
    <slot />
  </li>
</template>

<script lang="ts">
import { useListItemClasses } from '@components/list/List.helper';
import { Color, Size } from '@models/common-props.types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'GListItem',
  props: {
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
    activeColor: {
      type: String as PropType<Color>,
      default: 'neutral',
    },
    active: Boolean,
  },
  setup: (props) => {
    return { classes: useListItemClasses(props) };
  },
});
</script>

<style scoped></style>
