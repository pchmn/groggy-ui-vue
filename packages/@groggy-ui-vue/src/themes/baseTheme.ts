import { Variant } from '@models/common-props.types';
import { Theme } from '@themes/theme';
import { DeepPartial } from '@utils/deepPartial';
import colors from 'tailwindcss/colors';

const baseTheme: DeepPartial<Theme> = {
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
      base: `inline-flex items-center text-base rounded shadow focus:shadow-md focus:outline-none focus:ring transition-component duration-300`,
      variant: (variant: Variant) =>
        `text-white bg-${variant}-500 hover:shadow-md hover:bg-${variant}-450 focus:bg-${variant}-450 focus:ring-${variant}-500 focus:ring-opacity-50`,
      variantOutlined: (variant: Variant) =>
        `text-${variant}-500 bg-opacity-0 border border-${variant}-500 hover:bg-${variant}-500 hover:bg-opacity-10 focus:bg-${variant}-500 focus:bg-opacity-10 focus:ring-${variant}-500 focus:ring-opacity-50`,
      disabled: `text-white text-opacity-50 bg-gray-500 bg-opacity-50 cursor-not-allowed`,
      round: 'rounded-full',
      sm: 'py-0.5 px-3.5',
      md: 'py-1.5 px-5',
      lg: 'text-lg py-2 px-7',
    },
    checkbox: {
      base: 'rounded-sm bg-transparent border-gray-500 border-opacity-80 focus:ring focus:ring-offset-0 transition-component duration-300 h-4.5 w-4.5',
      variant: (variant: Variant) =>
        `text-${variant}-500 hover:border-${variant}-500 focus:border-${variant}-500 focus:ring-${variant}-500 focus:ring-opacity-50 cursor-pointer`,
      disabled:
        'text-gray-500 text-opacity-50 cursor-not-allowed bg-opacity-50',
      label: 'ml-2 font-normal text-base cursor-pointer',
      labelDisabled: 'text-gray-500 text-opacity-75 cursor-not-allowed',
    },
    card: {
      base: 'p-5 bg-gray-800 shadow rounded flex flex-col',
      outlined: 'border border-gray-700',
      title: 'font-semibold text-lg mb-4',
    },
  },
};

export default baseTheme;
