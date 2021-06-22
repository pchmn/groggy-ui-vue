<template>
  <label class="inline-flex items-center">
    <input
      type="checkbox"
      :class="rootClasses"
      :disabled="disabled"
      :checked="modelValue"
      @change="$emit('update:modelValue', !modelValue)"
    />
    <span :class="labelClassses"><slot></slot></span>
    <!-- <span
      class="ml-2 font-normal"
      @click="$emit('update:modelValue', !modelValue)"
      ><slot></slot
    ></span> -->
  </label>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, computed } from 'vue';
import { Variant, Size } from '@models/common-props.types';
import { useTheme } from '@themes/useTheme';

export default defineComponent({
  name: 'Checkbox',
  props: {
    modelValue: Boolean,
    variant: {
      type: String as PropType<Variant>,
      default: 'default',
    },
    disabled: Boolean,
  },
  emits: ['update:modelValue'],
  setup: (props, { emit }) => {
    const { theme } = useTheme();
    const rootClasses = computed(() => [
      theme.components.checkbox.base,
      props.disabled
        ? `${theme.components.checkbox.disabled} disabled`
        : theme.components.checkbox.variant(props.variant),
    ]);
    const labelClassses = computed(() => [
      theme.components.checkbox.label,
      {
        [`${theme.components.checkbox.labelDisabled}`]: props.disabled,
      },
    ]);
    return { rootClasses, labelClassses };
  },
});
</script>

<style scoped>
input {
  background-size: 0%;
}
input[type='checkbox']:checked {
  background-size: 100%;
}
input[type='checkbox']:checked.disabled {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgba(255, 255, 255, 0.5)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}
</style>
