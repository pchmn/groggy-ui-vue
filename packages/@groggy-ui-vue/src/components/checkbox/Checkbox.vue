<template>
  <label class="inline-flex items-center">
    <input
      :id="id"
      v-model="computedValue"
      v-tw="'form-checkbox'"
      type="checkbox"
      :class="classes.inputClasses"
      :name="name"
      :disabled="disabled"
      :indeterminate="indeterminate"
      :true-value="trueValue"
      :false-value="falseValue"
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
  name: 'Checkbox',
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'primary',
    },
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
    modelValue: [
      Boolean,
      String,
      Number,
      Array as () => Array<string | number>,
    ],
    value: [String, Number, Array as () => Array<string>],
    trueValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    falseValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    checked: Boolean,
    id: String,
    name: String,
    round: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
  },
  emits: ['update:modelValue'],
  setup: (props, { emit }) => {
    const classes = computed(() => useComponentClasses('checkbox', props));
    const computedValue = computed({
      get(): boolean | string | number | (string | number)[] | undefined {
        return props.modelValue;
      },
      set(value: boolean | string | number | (string | number)[] | undefined) {
        emit('update:modelValue', value);
      },
    });
    return { classes, computedValue };
  },
});
</script>

<style scoped></style>
