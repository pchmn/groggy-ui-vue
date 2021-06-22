import { useTheme } from '@themes/useTheme';
import VWave from 'v-wave';
import { App } from 'vue';
import Button from './components/button/Button.vue';
import Card from './components/card/Card.vue';
import Checkbox from './components/checkbox/Checkbox.vue';
import './style.css';

export interface MonorepoLibExamplePlugin {
  install(app: App): void;
}

const components = {
  Button,
  Checkbox,
  Card,
};

const MonorepoLibExample: MonorepoLibExamplePlugin = {
  install(app: App) {
    const { applyTheme, switchThemeTo } = useTheme();
    applyTheme();
    // switchThemeTo('light');
    const prefix = 'G';
    for (const component in components) {
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
  },
};

export default MonorepoLibExample;
export { Button as GButton };
export { Checkbox as GCheckbox };
export { Card as GCard };

