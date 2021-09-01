import clickOutsideDirective from '@directives/clickOutside.directive';
import twDirective from '@directives/tw.directive';
import { useTheme } from '@themes/hooks/useTheme';
import { GTheme } from '@themes/theme';
import { setupTwind } from '@themes/twind/setup';
import { extendTheme } from '@themes/utils';
import { DeepPartial } from '@utils/deepPartial';
import 'twind/shim';
import VWave from 'v-wave';
import { App, DefineComponent } from 'vue';
import './style.css';

export interface MonorepoLibExamplePlugin {
  install(
    app: App,
    options?: { theme?: DeepPartial<GTheme>; components?: DefineComponent<any> }
  ): void;
}

const MonorepoLibExample: MonorepoLibExamplePlugin = {
  install(
    app: App,
    options?: { theme?: DeepPartial<GTheme>; components?: DefineComponent<any> }
  ) {
    const { theme, applyTheme, switchThemeTo } = useTheme();
    if (options?.theme) {
      applyTheme(extendTheme(theme.value, options.theme) as GTheme);
    }
    setupTwind(theme.value);
    // switchThemeTo('light');
    const prefix = 'G';
    for (const component in options?.components) {
      app.component(
        // @ts-expect-error qsfdsf
        `${prefix}${options.components[component].name}`,
        // @ts-expect-error qsfdsf
        options.components[component]
      );
    }
    app.use(VWave, {
      cancellationPeriod: 0,
      duration: 0.2,
      directive: 'ripple',
    });
    app.directive('tw', twDirective);
    app.directive('click-outside', clickOutsideDirective);
  },
};

export default MonorepoLibExample;
export * from './components';
export * from './hooks';
export * from './layouts';
export { useTheme };
