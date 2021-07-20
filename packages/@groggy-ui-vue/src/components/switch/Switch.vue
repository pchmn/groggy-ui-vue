<template>
  <label class="inline-flex items-center">
    <input
      :id="id"
      ref="checkboxRef"
      v-model="computedValue"
      v-tw="'w-0 h-0'"
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :true-value="trueValue"
      :false-value="falseValue"
      :value="value"
      :checked="checked"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    />
    <button
      ref="switchRef"
      :disabled="disabled"
      :class="classes.switchClasses"
      type="button"
      role="switch"
      @click="onClick"
    >
      <span aria-hidden="true" :class="classes.circleClasses" />
    </button>
    <span v-if="$slots['default']" :class="classes.labelClasses"
      ><slot></slot
    ></span>
  </label>
</template>

<script lang="ts">
import componentFormProps from '@shared/form.props';
import { useComponentClasses } from '@themes/hooks/useComponentClasses';
import { computed, defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Switch',
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
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const checkboxRef = ref(null);
    const switchRef = ref(null);
    const switchEnabled = ref(false);
    const computedValue = computed({
      get(): boolean | string | number | (string | number)[] | undefined {
        return props.modelValue;
      },
      set(value: boolean | string | number | (string | number)[] | undefined) {
        emit('update:modelValue', value);
      },
    });
    onMounted(
      () =>
        (switchEnabled.value = (
          checkboxRef.value as unknown as HTMLInputElement
        )?.checked)
    );
    const onChange = (value: any) =>
      (switchEnabled.value = value.target.checked);
    const onClick = () =>
      (checkboxRef.value as unknown as HTMLElement)?.click();
    const onFocus = () => (switchRef.value as unknown as HTMLElement)?.focus();
    const onBlur = () => (switchRef.value as unknown as HTMLElement)?.blur();
    const classes = computed(() =>
      useComponentClasses('switch', props, switchEnabled.value)
    );
    return {
      switchEnabled,
      classes,
      computedValue,
      onChange,
      checkboxRef,
      switchRef,
      onClick,
      onFocus,
      onBlur,
    };
  },
});
</script>

<style scoped></style>
