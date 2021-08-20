<template>
  <div v-tw="'flex-col'">
    <div
      v-tw="[{ [`border(& ${status}-500 opacity-100)`]: status }, 'w-full']"
      :class="classes.wrapperClasses"
    >
      <!-- Prefix -->
      <span
        v-if="$slots['prefix']"
        v-tw="`${variant === 'outlined' ? 'border-r' : ''}`"
        :class="`${classes.preffixSuffixClasses} ${classes.inputClasses}`"
      >
        <slot name="prefix"></slot>
      </span>
      <!-- Left icon -->
      <g-icon
        v-if="$slots['prefix-icon']"
        v-tw="`ml-${margin}`"
        :size="iconSize"
        color="gray"
      >
        <slot name="prefix-icon"></slot>
      </g-icon>
      <!-- Input -->
      <input
        :id="id"
        v-model="computedValue"
        v-tw="'form-input w-full'"
        :class="classes.inputClasses"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
      />
      <!-- Right icon -->
      <g-icon
        v-if="$slots['suffix-icon']"
        v-tw="`mr-${margin}`"
        :size="iconSize"
        color="gray"
      >
        <slot name="suffix-icon"></slot>
      </g-icon>
      <!-- Suffix -->
      <span
        v-if="$slots['suffix']"
        v-tw="`${variant === 'outlined' ? 'border-l' : ''}`"
        :class="`${classes.preffixSuffixClasses} ${classes.inputClasses}`"
      >
        <slot name="suffix"></slot>
      </span>
    </div>
    <div v-if="helperText" v-tw="`text-${status}-500 text-sm mt-1`">
      {{ helperText }}
    </div>
  </div>
</template>

<script lang="ts">
import { Status, Variant } from '@models/common-props.types';
import { useComponentClasses } from '@themes/hooks/useComponentClasses';
import {
  componentFormProps,
  componentInputTextPorps,
} from '@shared/form.props';
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    ...componentFormProps,
    ...componentInputTextPorps,
    type: String as PropType<
      'text' | 'password' | 'email' | 'tel' | 'textarea'
    >,
    modelValue: [String, Number],
    value: [String, Number],
  },
  emits: ['update:modelValue', 'update:variant'],
  setup: (props, { emit }) => {
    const classes = computed(() =>
      useComponentClasses('input', {
        ...props,
        color: props.status || props.color,
      })
    );
    const computedValue = computed({
      get(): string | number | undefined {
        return props.modelValue;
      },
      set(value: string | number | undefined) {
        emit('update:modelValue', value);
      },
    });
    const iconSize = computed(() => {
      return props.size === 'sm'
        ? '0.9rem'
        : props.size === 'md'
        ? '1.1rem'
        : '1.4rem';
    });
    const margin = computed(() => {
      return props.size === 'sm' ? '2' : props.size === 'md' ? '3' : '4';
    });
    return { classes, computedValue, iconSize, margin };
  },
});
</script>

<style scoped></style>
