<template>
  <label class="inline-flex items-center">
    <input
      v-tw="'form-checkbox'"
      :class="classes.checkboxClasses"
      type="checkbox"
      :disabled="disabled"
      :checked="modelValue"
      :indeterminate="indeterminate"
      @change="$emit('update:modelValue', !modelValue)"
    />
    <span :class="classes.labelClasses"><slot></slot></span>
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { Variant, Size } from '@models/common-props.types';
import { useComponentClasses } from '@themes/hooks/useComponentClasses';

export default defineComponent({
  name: 'Checkbox',
  props: {
    modelValue: Boolean,
    variant: {
      type: String as PropType<Variant>,
      default: 'default',
    },
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
    round: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
  },
  emits: ['update:modelValue'],
  setup: (props) => {
    const classes = computed(() => useComponentClasses('checkbox', props));
    return { classes };
  },
});
</script>

<style scoped></style>
