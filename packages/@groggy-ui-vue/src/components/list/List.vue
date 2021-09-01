<template>
  <ul :class="classes">
    <slot />
  </ul>
</template>

<script lang="ts">
import { useListClasses } from '@components/list/List.helper';
import { Size } from '@models/common-props.types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'GList',
  props: {
    padding: {
      type: String as PropType<Size | 'none'>,
      default: 'md',
    },
    bordered: {
      type: Boolean,
      default: true,
    },
    roundedRadius: {
      type: Boolean,
      default: true,
    },
  },
  setup: (props) => {
    return { classes: useListClasses(props) };
  },
});
</script>

<style scoped></style>
