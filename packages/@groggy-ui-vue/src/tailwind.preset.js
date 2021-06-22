const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

function cssVarRgbHelper(cssVariable) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(--${cssVariable}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(--${cssVariable}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(--${cssVariable}))`;
  };
}

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      default: {
        100: cssVarRgbHelper('color-default-100-rgb'),
        200: cssVarRgbHelper('color-default-200-rgb'),
        300: cssVarRgbHelper('color-default-300-rgb'),
        400: cssVarRgbHelper('color-default-400-rgb'),
        450: cssVarRgbHelper('color-default-450-rgb'),
        500: cssVarRgbHelper('color-default-500-rgb'),
        600: cssVarRgbHelper('color-default-600-rgb'),
        700: cssVarRgbHelper('color-default-700-rgb'),
        800: cssVarRgbHelper('color-default-800-rgb'),
        900: cssVarRgbHelper('color-default-900-rgb'),
      },
      primary: {
        100: cssVarRgbHelper('color-primary-100-rgb'),
        200: cssVarRgbHelper('color-primary-200-rgb'),
        300: cssVarRgbHelper('color-primary-300-rgb'),
        400: cssVarRgbHelper('color-primary-400-rgb'),
        450: cssVarRgbHelper('color-primary-450-rgb'),
        500: cssVarRgbHelper('color-primary-500-rgb'),
        600: cssVarRgbHelper('color-primary-600-rgb'),
        700: cssVarRgbHelper('color-primary-700-rgb'),
        800: cssVarRgbHelper('color-primary-800-rgb'),
        900: cssVarRgbHelper('color-primary-900-rgb'),
      },
      secondary: {
        100: cssVarRgbHelper('color-secondary-100-rgb'),
        200: cssVarRgbHelper('color-secondary-200-rgb'),
        300: cssVarRgbHelper('color-secondary-300-rgb'),
        400: cssVarRgbHelper('color-secondary-400-rgb'),
        450: cssVarRgbHelper('color-secondary-450-rgb'),
        500: cssVarRgbHelper('color-secondary-500-rgb'),
        600: cssVarRgbHelper('color-secondary-600-rgb'),
        700: cssVarRgbHelper('color-secondary-700-rgb'),
        800: cssVarRgbHelper('color-secondary-800-rgb'),
        900: cssVarRgbHelper('color-secondary-900-rgb'),
      },
      success: {
        100: cssVarRgbHelper('color-success-100-rgb'),
        200: cssVarRgbHelper('color-success-200-rgb'),
        300: cssVarRgbHelper('color-success-300-rgb'),
        400: cssVarRgbHelper('color-success-400-rgb'),
        450: cssVarRgbHelper('color-success-450-rgb'),
        500: cssVarRgbHelper('color-success-500-rgb'),
        600: cssVarRgbHelper('color-success-600-rgb'),
        700: cssVarRgbHelper('color-success-700-rgb'),
        800: cssVarRgbHelper('color-success-800-rgb'),
        900: cssVarRgbHelper('color-success-900-rgb'),
      },
      info: {
        100: cssVarRgbHelper('color-info-100-rgb'),
        200: cssVarRgbHelper('color-info-200-rgb'),
        300: cssVarRgbHelper('color-info-300-rgb'),
        400: cssVarRgbHelper('color-info-400-rgb'),
        450: cssVarRgbHelper('color-info-450-rgb'),
        500: cssVarRgbHelper('color-info-500-rgb'),
        600: cssVarRgbHelper('color-info-600-rgb'),
        700: cssVarRgbHelper('color-info-700-rgb'),
        800: cssVarRgbHelper('color-info-800-rgb'),
        900: cssVarRgbHelper('color-info-900-rgb'),
      },
      warning: {
        100: cssVarRgbHelper('color-warning-100-rgb'),
        200: cssVarRgbHelper('color-warning-200-rgb'),
        300: cssVarRgbHelper('color-warning-300-rgb'),
        400: cssVarRgbHelper('color-warning-400-rgb'),
        450: cssVarRgbHelper('color-warning-450-rgb'),
        500: cssVarRgbHelper('color-warning-500-rgb'),
        600: cssVarRgbHelper('color-warning-600-rgb'),
        700: cssVarRgbHelper('color-warning-700-rgb'),
        800: cssVarRgbHelper('color-warning-800-rgb'),
        900: cssVarRgbHelper('color-warning-900-rgb'),
      },
      error: {
        100: cssVarRgbHelper('color-error-100-rgb'),
        200: cssVarRgbHelper('color-error-200-rgb'),
        300: cssVarRgbHelper('color-error-300-rgb'),
        400: cssVarRgbHelper('color-error-400-rgb'),
        450: cssVarRgbHelper('color-error-450-rgb'),
        500: cssVarRgbHelper('color-error-500-rgb'),
        600: cssVarRgbHelper('color-error-600-rgb'),
        700: cssVarRgbHelper('color-error-700-rgb'),
        800: cssVarRgbHelper('color-error-800-rgb'),
        900: cssVarRgbHelper('color-error-900-rgb'),
      },

      transparent: 'transparent',
      current: 'currentColor',

      'primary-text': cssVarRgbHelper('color-primary-text-rgb'),
      background: 'var(--color-background)',

      blue: colors.lightBlue,
      cyan: colors.cyan,
      gray: colors.gray,
      green: colors.emerald,
      indigo: colors.indigo,
      orange: colors.amber,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      teal: colors.teal,
      yellow: colors.yellow,
      white: colors.white,
      black: colors.black,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-family)', fontFamily.sans],
      },
      height: {
        4.5: '1.125rem',
      },
      width: {
        4.5: '1.125rem',
      },
      transitionProperty: {
        component:
          'background-size, background-color, border-color, color, fill, stroke, box-shadow',
      },
      fontSize: {
        base: '0.925rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const animationDelay = {
        '.animation-delay-75': {
          'animation-delay': '75ms',
        },
        '.animation-delay-100': {
          'animation-delay': '100ms',
        },
        '.animation-delay-150': {
          'animation-delay': '150ms',
        },
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-300': {
          'animation-delay': '300ms',
        },
        '.animation-delay-500': {
          'animation-delay': '500ms',
        },
        '.animation-delay-600': {
          'animation-delay': '600ms',
        },
        '.animation-delay-700': {
          'animation-delay': '700ms',
        },
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
      };

      addUtilities(animationDelay, ['responsive']);
    }),
    ({ addBase, theme }) => {
      addBase({
        html: {
          color: theme('colors.primary-text'),
          backgroundColor: theme('colors.background'),
        },
      });
    },
    require('@tailwindcss/forms'),
  ],
};
