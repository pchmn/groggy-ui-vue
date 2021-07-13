<template>
  <label class="inline-flex items-center">
    <input
      :id="id"
      v-model="computedValue"
      v-tw="'form-radio'"
      type="radio"
      :class="classes.inputClasses"
      :disabled="disabled"
      :indeterminate="indeterminate"
      :name="name"
      :value="value"
      :checked="checked"
    />
    <span :class="classes.labelClasses"><slot></slot></span>
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { Color, Size } from '@models/common-props.types';
import { useComponentClasses } from '@themes/hooks/useComponentClasses';

export default defineComponent({
  name: 'Radio',
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'primary',
    },
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
    modelValue: [Boolean, String, Number],
    value: [String, Number],
    checked: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
    name: String,
    id: String,
  },
  emits: ['update:modelValue'],
  setup: (props, { emit }) => {
    const classes = computed(() => useComponentClasses('radio', props));
    const computedValue = computed({
      get(): boolean | string | number | undefined {
        return props.modelValue;
      },
      set(value: boolean | string | number | undefined) {
        emit('update:modelValue', value);
      },
    });
    return { classes, computedValue };
  },
});
</script>

<style scoped></style>
