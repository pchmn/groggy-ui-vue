<template>
  <listbox v-model="computedValue" :style="`--scrollbar-color: ${colorHex}`">
    <div v-tw="'relative mt-1'">
      <listbox-button v-slot="{ open }" as="template">
        <button
          :class="[
            { [classes.inputClasses.open]: open },
            classes.inputClasses.default,
          ]"
        >
          <span
            v-tw="'flex-grow truncate'"
            :class="{
              isPlaceholder:
                computedValue === undefined || computedValue === null,
            }"
            >{{ getButtonText() }}</span
          >
          <g-icon
            :class="[
              { [classes.iconClasses.open]: open },
              classes.iconClasses.default,
            ]"
            size="1rem"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </g-icon>
        </button>
      </listbox-button>

      <transition
        :enter-active-class="transitionClasses.enterActiveClass"
        :enter-from-class="transitionClasses.enterFromClass"
        :enter-to-class="transitionClasses.enterToClass"
        :leave-active-class="transitionClasses.leaveActiveClass"
        :leave-from-class="transitionClasses.leaveFromClass"
        :leave-to-class="transitionClasses.leaveToClass"
      >
        <listbox-options :class="classes.optionsContainerClasses">
          <listbox-option
            v-for="option in options"
            v-slot="{ active, selected }"
            :key="getOptionKey(option)"
            :value="option"
            as="template"
          >
            <li
              :class="[
                { [classes.optionClasses.active]: active },
                { [classes.optionClasses.selected]: selected },
                classes.optionClasses.default,
              ]"
            >
              <span v-tw="'truncate'"> {{ getOptionText(option) }}</span>
              <g-icon
                v-if="selected"
                size="1.25rem"
                :color="color"
                :color-shade="400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </g-icon>
            </li>
          </listbox-option>
        </listbox-options>
      </transition>
    </div>
  </listbox>
</template>

<script lang="ts">
import {
  componentFormProps,
  componentInputTextPorps,
} from '@shared/form.props';
import { computed, defineComponent } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import { useComponentClasses } from '@themes/hooks/useComponentClasses';
import { tw } from 'twind';
import GIcon from '@components/icon/Icon.vue';
import { theme, css } from 'twind/css';
import { useTheme } from '@themes/hooks/useTheme';
import { colorOpacity, shadeColor } from '@themes/utils';

export default defineComponent({
  name: 'Select',
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    GIcon,
  },
  props: {
    ...componentFormProps,
    ...componentInputTextPorps,
    modelValue: [String, Number, Object],
    options: Array,
    bindLabel: {
      type: String,
      default: 'label',
    },
    bindValue: {
      type: String,
      default: 'value',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { theme } = useTheme();
    console.log('color', (theme.value.colors[props.color] as any)[500]);
    const classes = computed(() => useComponentClasses('select', props));
    const transitionClasses = {
      enterActiveClass: tw('transition duration-100 ease-out'),
      enterFromClass: tw('transform scale-95 opacity-0'),
      enterToClass: tw('transform scale-100 opacity-100'),
      leaveActiveClass: tw('transition duration-200 ease-out'),
      leaveFromClass: tw('transform scale-100 opacity-100'),
      leaveToClass: tw('transform scale-95 opacity-0'),
    };

    const computedValue = computed({
      get(): string | number | any | undefined {
        return props.modelValue;
      },
      set(value: string | number | any | undefined) {
        emit('update:modelValue', value);
      },
    });

    const getButtonText = () => {
      if (computedValue.value === undefined || computedValue.value === null) {
        return props.placeholder;
      }
      if (typeof computedValue.value === 'object') {
        return computedValue.value[props.bindLabel];
      }
      return computedValue.value;
    };

    const getOptionKey = (option: string | number | any | undefined) => {
      if (typeof option === 'object' && option) {
        return option[props.bindValue];
      }
      return option;
    };

    const getOptionText = (option: string | number | any | undefined) => {
      if (typeof option === 'object' && option) {
        return option[props.bindLabel];
      }
      return option;
    };

    return {
      classes,
      transitionClasses,
      computedValue,
      getButtonText,
      getOptionKey,
      getOptionText,
      colorHex: colorOpacity(
        (theme.value.colors[props.color] as any)[500],
        0.75
      ),
    };
  },
});
</script>

<style scoped>
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #cbd5e023;
}

* {
  scrollbar-color: var(--scrollbar-color) #cbd5e023;
  scrollbar-width: thin;
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-color);
  border-radius: 100vh;
}

.isPlaceholder {
  color: #a1a1aa;
}
</style>
