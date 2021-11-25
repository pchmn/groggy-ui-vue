import { GTheme } from '@themes/theme';
import { formCheckbox, formInput, formRadio } from '@themes/twind/plugins';
import { apply, Configuration } from 'twind';
import * as colors from 'twind/colors';

const baseConfiguration: (gTheme: GTheme) => Configuration = (
  gTheme: GTheme
) => {
  return {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          ...gTheme.colors,
          ...colors,
        },
        screens: {
          sm: `${gTheme.screens.sm}px`,
          md: `${gTheme.screens.md}px`,
          lg: `${gTheme.screens.lg}px`,
          xl: `${gTheme.screens.xl}px`,
          '2xl': `${gTheme.screens['2xl']}px`,
        },
        fontFamily: {
          sans: gTheme.fontFamily,
        },
        height: {
          3.5: '0.875rem',
          4.5: '1.125rem',
          5.5: '1.375rem',
        },
        width: {
          3.5: '0.875rem',
          4.5: '1.125rem',
          5.5: '1.375rem',
        },
        maxWidth: {
          '1/4': '25%',
          '1/2': '50%',
          '3/4': '75%',
        },
        borderWidth: {
          '4.5': '4.5px',
          5: '5px',
        },
        transitionProperty: {
          component:
            'background-size, background-color, border-color, color, fill, stroke, box-shadow, width, transform',
        },
        fontSize: {
          base: '0.925rem',
          '3.5xl': '2rem',
          '4.5xl': '2.5rem',
        },
        opacity: {
          15: '0.15',
        },
        boxShadow: {
          switch: '0px 1px 3px 1px rgba(0,0,0,0.4)',
        },
      },
    },
    preflight: (preflight, { theme }) => ({
      ...preflight,
      '@import': `url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap')`,
      body: apply`dark:bg-gray-900 dark:text-white bg-gray-100 text-black text-base`,
    }),
    plugins: {
      'form-checkbox': formCheckbox,
      'form-radio': formRadio,
      'form-input': formInput,
    },
  };
};

export default baseConfiguration;
