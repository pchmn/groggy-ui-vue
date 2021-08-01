<template>
  <label class="inline-flex items-center">
    <input
      :id="id"
      v-model="computedValue"
      v-tw="'form-radio'"
      type="radio"
      :class="classes.inputClasses"
      :disabled="disabled"
      :name="name"
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
  name: 'Radio',
  props: {
    ...componentFormProps,
    modelValue: [Boolean, String, Number],
    value: [String, Number],
    checked: Boolean,
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
