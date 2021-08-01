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
    <span v-if="$slots['default']" :class="classes.labelClasses"
      ><slot></slot
    ></span>
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { useComponentClasses } from '@themes/hooks/useComponentClasses';
import { componentFormProps } from '@shared/form.props';

export default defineComponent({
  name: 'Checkbox',
  props: {
    ...componentFormProps,
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
    round: Boolean,
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
