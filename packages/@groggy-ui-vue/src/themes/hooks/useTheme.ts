import baseTheme from '@themes/baseTheme';
import { GTheme } from '@themes/theme';
import { reactive } from 'vue';

const state = reactive({
  theme: baseTheme,
  type: 'dark',
});
document.documentElement.classList.add('dark');

export function useTheme() {
  const applyTheme = (theme: GTheme) => {
    state.theme = theme;
  };

  const switchThemeTo = (type: 'dark' | 'light') => {
    state.type = type;
    type === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  };

  return { theme: state.theme, applyTheme, switchThemeTo };
}
