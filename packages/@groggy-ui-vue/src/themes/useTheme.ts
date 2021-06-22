import dark from '@themes/dark';
import lightTheme from '@themes/lightTheme';
import { applyCssVariablesTheme } from '@themes/utils';
import { reactive } from 'vue';

const state = reactive({
  darkTheme: dark,
  lightTheme: lightTheme,
  using: dark,
});

export function useTheme() {
  const applyTheme = (theme?: any) => {
    console.log('theme', theme, state);
    if (theme) {
      state.using = theme;
    }
    applyCssVariablesTheme(state.using);
  };

  const switchThemeTo = (type: 'dark' | 'light') => {
    applyTheme(type === 'dark' ? state.darkTheme : state.lightTheme);
  };

  return { theme: state.using, applyTheme, switchThemeTo };
}
