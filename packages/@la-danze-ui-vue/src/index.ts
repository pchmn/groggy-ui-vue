import { App } from 'vue';
import CountButton from './components/CountButton.vue';
import './style.css';

export interface MonorepoLibExamplePlugin {
  install(app: App): void;
}

const components = {
  CountButton
};

const MonorepoLibExample: MonorepoLibExamplePlugin = {
  install(app: App) {
    app.component(CountButton.name, CountButton);
    // for (const component in components) {
    //   // @ts-expect-error
    //   app.component(component.name, component)
    // }
  }
}

export default MonorepoLibExample;
export { CountButton };
