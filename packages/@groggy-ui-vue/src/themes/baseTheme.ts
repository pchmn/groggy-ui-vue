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
      base: `inline-flex items-center text-base rounded shadow hover:shadow-md focus:shadow-md focus:outline-none focus:ring transition-shadow transition-colors duration-300`,
      variant: (variant: Variant) =>
        `text-white bg-${variant}-500 hover:bg-${variant}-450 focus:bg-${variant}-450 focus:ring-${variant}-500 focus:ring-opacity-50`,
      variantOutlined: (variant: Variant) =>
        `text-${variant}-400 bg-opacity-0 border border-${variant}-500 hover:bg-${variant}-500 hover:bg-opacity-10 focus:bg-${variant}-500 focus:bg-opacity-10 focus:ring-${variant}-500 focus:ring-opacity-50`,
      disabled: `text-white text-opacity-50 bg-gray-500 bg-opacity-50 hover:shadow cursor-not-allowed`,
      round: 'rounded-full',
      sm: 'py-0.5 px-3.5',
      md: 'py-1.5 px-5',
      lg: 'text-lg py-2 px-7',
    },
  },
};

export default baseTheme;
