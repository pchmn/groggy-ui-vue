import baseTheme from '@themes/baseTheme';
import { Theme } from '@themes/theme';
import { extendTheme } from '@themes/utils';
import colors from 'tailwindcss/colors';

const lightTheme: Theme = extendTheme(baseTheme, {
  colors: {
    primaryText: '#dfgrthy',
    background: colors.gray[200],
  },
}) as Theme;

console.log('lightTheme', lightTheme);

export default lightTheme;
