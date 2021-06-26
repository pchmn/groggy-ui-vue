import { Variant } from '@models/common-props.types';
import { GTheme } from '@themes/theme';
import * as colors from 'twind/colors';

const baseTheme: GTheme = {
  colors: {
    default: colors.gray,
    primary: colors.indigo,
    secondary: colors.teal,
    success: colors.emerald,
    info: colors.lightBlue,
    warning: colors.amber,
    error: colors.red,
  },
  fontFamily: ['Inter'],
  components: {
    button: {
      base: `inline-flex items-center rounded shadow focus:(shadow-md outline-none ring) transition-component duration-300`,
      variant: (variant: Variant) =>
        `text-white bg-${variant}-500 hover:shadow-md hover:bg-${variant}-450 focus:bg-${variant}-450 focus:ring-${variant}-500 focus:ring-opacity-50`,
      variantOutlined: (variant: Variant) =>
        `text-${variant}-500 bg-opacity-0 border(1 ${variant}-500) hover:(bg-${variant}-500 bg-opacity-10) focus:(bg-${variant}-500 bg-opacity-10 ring-${variant}-500 ring-opacity-50)`,
      disabled: `text(white opacity-50) bg(gray-500 opacity-50) cursor-not-allowed`,
      round: 'rounded-full',
      sm: 'text-sm py-0.5 px-3',
      md: 'py-1.5 px-5',
      lg: 'text-lg py-2 px-7',
    },
    checkbox: {
      base: 'rounded-sm bg-transparent border(& gray-500 opacity-80) focus:(ring ring-offset-0) transition-component duration-300',
      variant: (variant: Variant) =>
        `text-${variant}-500 hover:border-${variant}-500 focus:(border-${variant}-500 ring-${variant}-500 ring-opacity-50) cursor-pointer`,
      disabled: 'text(gray-500 opacity-50) bg-opacity-50 cursor-not-allowed',
      label: 'ml-2 font-normal text-base cursor-pointer',
      labelDisabled: 'text(gray-500 opacity-75) override:(cursor-not-allowed)',
      round: 'override:rounded-full',
      sm: 'h-3.5 w-3.5',
      md: 'h-4.5 w-4.5',
      lg: 'h-5.5 w-5.5',
    },
    card: {
      base: 'p-5 bg-gray-300 dark:bg-gray-800 shadow rounded flex flex-col',
      outlined: 'bg-gray-200 border(1 gray-300 gray-700(dark:&)) shadow-sm',
      title: 'font-semibold text-lg mb-4',
    },
    icon: {
      variant: (variant: Variant) =>
        `${
          variant === 'default'
            ? 'text-black dark:text-white'
            : `text-${variant}-500`
        }`,
      color: (color: string) => `text(${color})`,
    },
    spinner: {
      variant: (variant: Variant) =>
        `${
          variant === 'default'
            ? 'text-black dark:text-white'
            : `text-${variant}-500`
        }`,
      color: (color: string) => `text(${color})`,
    },
  },
};

export default baseTheme;
