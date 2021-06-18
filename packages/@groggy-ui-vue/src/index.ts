import { useTheme } from '@themes/useTheme';
import VWave from 'v-wave';
import { App } from 'vue';
import Button from './components/button/Button.vue';
import './style.css';

export interface MonorepoLibExamplePlugin {
  install(app: App): void;
}

const components = {
  Button
};

const MonorepoLibExample: MonorepoLibExamplePlugin = {
  install(app: App) {
    const { applyTheme } = useTheme();
    applyTheme();
    const prefix = 'G';
    for (const component in components) {
      // @ts-expect-error
      app.component(`${prefix}${components[component].name}`, components[component])
    }
    app.use(VWave, { cancellationPeriod: 0, duration: 0.3, directive: 'ripple' });
  }
}

export default MonorepoLibExample;
export { Button as GButton };
