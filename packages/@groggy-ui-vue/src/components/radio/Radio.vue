<template>
  <label class="inline-flex items-center">
    <input
      v-tw="'form-radio'"
      :class="classes.inputClasses"
      type="radio"
      :disabled="disabled"
      :checked="modelValue"
      :indeterminate="indeterminate"
      :name="name"
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
  name: 'Radio',
  props: {
    modelValue: Boolean,
    checked: Boolean,
    variant: {
      type: String as PropType<Variant>,
      default: 'default',
    },
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
    disabled: Boolean,
    indeterminate: Boolean,
    name: String,
  },
  emits: ['update:modelValue'],
  setup: (props) => {
    const classes = computed(() => useComponentClasses('radio', props));
    return { classes };
  },
});
</script>

<style scoped>
input {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease;
  transition-property: box-shadow, border-color;
}
input:before {
  content: '';
  display: block;
  border-radius: 50%;
  height: 50%;
  width: 50%;
  transition: all 300ms ease;
  transition-property: border-color;
}
</style>
