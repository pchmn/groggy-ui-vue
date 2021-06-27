<template>
  <label class="inline-flex items-center">
    <input
      v-tw="'form-checkbox'"
      type="checkbox"
      :class="classes.inputClasses"
      :disabled="disabled"
      :indeterminate="indeterminate"
      :checked="isChecked"
      :true-value="trueValue"
      :false-value="falseValue"
      @change="updateInput"
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
    variant: {
      type: String as PropType<Variant>,
      default: 'default',
    },
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
    modelValue: [Boolean, String, Number, Array],
    value: [String, Number],
    trueValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    falseValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    round: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
  },
  emits: ['update:modelValue'],
  setup: (props, { emit }) => {
    const classes = computed(() => useComponentClasses('checkbox', props));
    const isChecked = computed(() => {
      if (props.modelValue instanceof Array) {
        return props.modelValue.includes(props.value);
      }
      return props.modelValue === props.trueValue;
    });
    const updateInput = (event: any) => {
      const isChecked = event?.target?.checked;
      if (props.modelValue instanceof Array) {
        const newValue = [...props.modelValue];
        if (isChecked) {
          newValue.push(props.value);
        } else {
          newValue.splice(newValue.indexOf(props.value), 1);
        }
        emit('update:modelValue', newValue);
      } else {
        emit(
          'update:modelValue',
          isChecked ? props.trueValue : props.falseValue
        );
      }
    };
    return { classes, isChecked, updateInput };
  },
});
</script>

<style scoped></style>
