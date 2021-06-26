import twDirective from '@directives/tw.directive';
import { useTheme } from '@themes/hooks/useTheme';
import { GTheme } from '@themes/theme';
import { setupTwind } from '@themes/twind/setup';
import { extendTheme } from '@themes/utils';
import { DeepPartial } from '@utils/deepPartial';
import VWave from 'v-wave';
import * as components from './components';
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
      applyTheme(extendTheme(theme, options.theme) as GTheme);
    }
    setupTwind(theme);
    // switchThemeTo('light');
    const prefix = 'G';
    for (const component in options?.components || components) {
      app.component(
        // @ts-expect-error qsfdsf
        `${prefix}${components[component].name}`,
        // @ts-expect-error qsfdsf
        components[component]
      );
    }
    app.use(VWave, {
      cancellationPeriod: 0,
      duration: 0.3,
      directive: 'ripple',
    });
    app.directive('tw', twDirective);
  },
};

export default MonorepoLibExample;
export * from './components';
