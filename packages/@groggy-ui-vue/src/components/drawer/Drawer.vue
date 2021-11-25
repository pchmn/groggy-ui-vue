<template>
  <g-card
    v-click-outside="closeDrawer"
    v-tw="[
      'h-full w-72 overflow-auto transform translate-x-0 transition-component duration-200',
      { '-translate-x-full': !matches && !isOpen },
      { 'fixed max-w-3/4': !matches },
    ]"
    class="drawer"
    padding="none"
  >
    <div v-if="$slots['header']" v-tw="'p-5'">
      <slot name="header" />
    </div>

    <g-list padding="lg" :bordered="bordered" :rounded-radius="roundedRadius">
      <slot />
    </g-list>
  </g-card>
</template>

<script lang="ts">
import GCard from '@components/card/Card.vue';
import GList from '@components/list/List.vue';
import { useDrawer, useMediaQuery } from '@hooks/index';
import { Size } from '@models/common-props.types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'GDrawer',
  components: {
    GCard,
    GList,
  },
  props: {
    padding: {
      type: String as PropType<Size | 'none'>,
      default: 'lg',
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    roundedRadius: {
      type: Boolean,
      default: true,
    },
  },
  setup: (props) => {
    const { matches } = useMediaQuery('lg', 'up');
    const { toggle, isOpen } = useDrawer();

    const closeDrawer = () => {
      if (!matches.value && isOpen.value) {
        toggle();
      }
    };

    return { matches, closeDrawer, isOpen };
  },
});
</script>

<style scoped></style>
