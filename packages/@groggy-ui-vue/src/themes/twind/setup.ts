import { GTheme } from '@themes/theme';
import { formCheckbox, formInput, formRadio } from '@themes/twind/plugins';
import { shadeColor } from '@themes/utils';
import { apply, setup } from 'twind';
import * as colors from 'twind/colors';

export function setupTwind(gTheme: GTheme) {
  setup({
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          neutral: {
            ...(gTheme.colors.neutral as any),
            // @ts-expect-errorf theme colors
            450: shadeColor(gTheme.colors.neutral[500], 10),
          },
          primary: {
            ...(gTheme.colors.primary as any),
            // @ts-expect-errorf theme colors
            450: shadeColor(gTheme.colors.primary[500], 10),
          },
          secondary: {
            ...(gTheme.colors.secondary as any),
            // @ts-expect-errorf theme colors
            450: shadeColor(gTheme.colors.secondary[500], 10),
          },
          success: {
            ...(gTheme.colors.success as any),
            // @ts-expect-errorf theme colors
            450: shadeColor(gTheme.colors.success[500], 10),
          },
          info: {
            ...(gTheme.colors.info as any),
            // @ts-expect-errorf theme colors
            450: shadeColor(gTheme.colors.info[500], 10),
          },
          warning: {
            ...(gTheme.colors.warning as any),
            // @ts-expect-errorf theme colors
            450: shadeColor(gTheme.colors.warning[500], 10),
          },
          error: {
            ...(gTheme.colors.error as any),
            // @ts-expect-errorf theme colors
            450: shadeColor(gTheme.colors.error[500], 10),
          },
          gray: colors.gray,
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
  });
}
