<template>
  <g-list-item :size="size" :active-color="activeColor" :active="active">
    <slot />
  </g-list-item>
</template>

<script lang="ts">
import GListItem from '@components/list/ListItem.vue';
import { Color, Size } from '@models/common-props.types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'GDrawerItem',
  components: {
    GListItem,
  },
  props: {
    size: {
      type: String as PropType<Size>,
      default: 'lg',
    },
    activeColor: {
      type: String as PropType<Color>,
      default: 'primary',
    },
    active: Boolean,
  },
});
</script>

<style scoped></style>
