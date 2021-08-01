<template>
  <div></div>
</template>

<script lang="ts">
import {
  componentFormProps,
  componentInputTextPorps,
} from '@shared/form.props';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Select',
  props: {
    ...componentFormProps,
    ...componentInputTextPorps,
    modelValue: [String, Number, Object],
    options: Array,
  },
  emits: ['update:modelValue'],
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
