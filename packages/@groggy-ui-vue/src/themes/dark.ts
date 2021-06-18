import baseTheme from '@themes/baseTheme';
import { Theme } from '@themes/theme';
import { extendTheme } from '@themes/utils';
import colors from 'tailwindcss/colors';

const darkTheme: Theme = extendTheme(baseTheme, {
  colors: {
    primaryText: '#000',
    background: colors.gray[900]
  }
});

export default darkTheme;