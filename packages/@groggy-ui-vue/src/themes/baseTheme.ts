import { Color, Variant } from '@models/common-props.types';
import { GTheme } from '@themes/theme';
import * as colors from 'twind/colors';

const baseTheme: GTheme = {
  colors: {
    neutral: colors.gray,
    primary: colors.indigo,
    secondary: colors.teal,
    success: colors.emerald,
    info: colors.lightBlue,
    warning: colors.amber,
    error: colors.red,
    ...colors,
  },
  fontFamily: ['Inter'],
  components: {
    button: {
      base: `inline-flex items-center rounded shadow focus:(shadow-md outline-none ring) transition-component duration-200`,
      standard: (color: Color) =>
        `text-white bg-${color}-500 hover:shadow-md focus:bg-${color}-450 focus:ring-${color}-500 focus:ring-opacity-40`,
      outlined: (color: Color) =>
        `text-${color}-500 bg-opacity-0 border(1 ${color}-500 opacity-75) hover:(bg-${color}-500 bg-opacity-10 border-opacity-100) focus:(bg-${color}-500 bg-opacity-10 ring-${color}-500 ring-opacity-40)`,
      flat: (color: Color) =>
        `shadow-none text-${color}-500 bg-opacity-0 hover:(bg-${color}-500 bg-opacity-10) focus:(bg-${color}-500 bg-opacity-10 ring-${color}-500 ring-opacity-40)`,
      disabled: `text(white opacity-50) bg(gray-500 opacity-50) cursor-not-allowed`,
      round: 'rounded-full',
      sm: 'text-sm py-0.5 px-3',
      md: 'py-1.5 px-5',
      lg: 'text-lg py-2 px-7',
    },
    checkbox: {
      base: 'rounded-sm bg-transparent border(& gray-500 opacity-80) focus:(ring ring-offset-0) transition-component duration-200',
      color: (color: Color) =>
        `text-${color}-500 hover:border-${color}-500 focus:(border-${color}-500 ring-${color}-500 ring-opacity-40) cursor-pointer`,
      disabled: 'text(gray-500 opacity-50) bg-opacity-50 cursor-not-allowed',
      label: 'ml-2 font-normal text-base cursor-pointer',
      labelDisabled: 'text(gray-500 opacity-75) override:(cursor-not-allowed)',
      round: 'override:rounded-full',
      sm: 'h-3.5 w-3.5',
      md: 'h-4.5 w-4.5',
      lg: 'h-5.5 w-5.5',
    },
    radio: {
      base: 'rounded-full border(& gray-500 opacity-80) focus:(ring ring-offset-0)',
      color: (color: Color) =>
        `text-${color}-500 before::bg-${color}-500 hover:border-${color}-500 focus:(border-${color}-500 ring-${color}-500 ring-opacity-40) checked:(border-${color}-500 bg-${color}-500 bg-opacity-20) cursor-pointer`,
      disabled:
        'text(gray-500 opacity-50) bg(gray-500 opacity-20) checked:before::(border-gray-500) cursor-not-allowed',
      label: 'ml-2 font-normal text-base cursor-pointer',
      labelDisabled: 'text(gray-500 opacity-75) override:(cursor-not-allowed)',
      sm: 'h-3.5 w-3.5',
      md: 'h-4.5 w-4.5',
      lg: 'h-5.5 w-5.5',
    },
    switch: {
      base: 'relative inline-flex flex-shrink-0 rounded-full border(2 transparent) cursor-pointer focus:(outline-none shadow-md outline-none ring ring-opacity-40) transition-component duration-200',
      color: (color: Color) => `focus:ring-${color}-500`,
      circle:
        'pointer-events-none inline-block rounded-full bg-white shadow-switch ring-0 transition-component duration-200',
      disabled: 'override:bg-opacity-50 override:(cursor-not-allowed)',
      label: 'ml-2 font-normal text-base cursor-pointer',
      labelDisabled: 'text(gray-500 opacity-75) override:(cursor-not-allowed)',
      sm: 'h-4 w-7 children:(h-2.5 w-2.5) translate-y-px',
      md: 'h-5 w-9 children:(h-3.5 w-3.5) translate-y-px',
      lg: 'h-6 w-11 children:(h-4.5 w-4.5) translate-y-px',
    },
    card: {
      base: 'p-5 bg-white dark:bg-gray-800 shadow rounded flex flex-col',
      outlined: 'border(1 gray-300 gray-700(dark:&)) shadow-sm',
      title: 'font-semibold text-lg mb-4',
    },
    icon: {
      color: (color: Color, shade?: number) =>
        `${color ? `text-${color}-${shade}` : 'text-black dark:text-white'}`,
    },
    spinner: {
      color: (color: Color) =>
        `${color ? `text-${color}-500` : 'text-black dark:text-white'}`,
    },
    input: {
      base: 'inline-flex items-center rounded focus-within:(shadow-md ring) transition-component duration-200',
      standard: (color: Color) =>
        `shadow-sm border(1 gray-500 opacity-0) bg(gray-500 opacity-10) dark:bg-opacity-25 focus-within:(ring ring(${color}-500 opacity-40) bg(${color}-500 opacity-10) dark:bg-opacity-10 border(1 ${color}-500)) hover:border-${color}-500`,
      outlined: (color: Color) =>
        `border(1 gray-500 opacity-50) focus-within:(ring(${color}-500 opacity-40) bg(${color}-500 opacity-10) dark:bg-opacity-10 border-${color}-500)  hover:border-${color}-500`,
      disabled: `text(white opacity-50) bg(gray-400 opacity-50) cursor-not-allowed`,
      round: 'rounded-full',
      prefixSuffix: (variant: Variant) =>
        `text-gray-400 bg(gray-500 opacity-10) dark:(bg(gray-500 opacity-20)) ${
          variant === 'outlined' ? 'border(gray-500 opacity-50)' : ''
        }`,
      sm: 'py-1 px-2 text-sm',
      md: 'py-1.5 px-3',
      lg: 'py-2 px-4 text-lg',
    },
    select: {
      base: 'relative w-full inline-flex items-center justify-between text-left rounded cursor-pointer focus:(shadow-md outline-none ring) transition-component duration-200',
      standard: (color: Color) =>
        `shadow-sm border(1 gray-500 opacity-0) bg(gray-500 opacity-10) dark:bg-opacity-25 focus:(ring(${color}-500 opacity-40) bg(${color}-500 opacity-10) dark:bg-opacity-10 border(${color}-500 opacity-100)) hover:border-${color}-500`,
      outlined: (color: Color) =>
        `border(1 gray-500 opacity-50) dark:bg-opacity-10 focus:(ring(${color}-500 opacity-40) bg(${color}-500 opacity-10) border-${color}-500) hover:border-${color}-500`,
      disabled: `text(white opacity-50) bg(gray-400 opacity-50) cursor-not-allowed`,
      round: 'rounded-full',
      optionClasses: `text-black override:dark:text-white inline-flex items-center justify-between w-full select-none relative py-1.5 px-3 cursor-pointer`,
      optionsContainerClass:
        'absolute z-10 scroller w-full overflow-auto rounded shadow-lg py-1 mt-2 max-h-60 bg-gray-100 dark:bg-gray-600 focus:outline-none',
      sm: 'py-1 px-3 text-sm',
      md: 'py-1.5 px-3',
      lg: 'py-2 px-4 text-lg',
    },
  },
};

export default baseTheme;
