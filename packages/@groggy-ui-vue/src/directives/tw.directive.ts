import { tw } from 'twind';
import { Directive, DirectiveBinding } from 'vue';

const applyTwind = (el: HTMLElement, classes: string) => {
  if (classes.length > 0) {
    classes.split(' ').forEach((item) => {
      el.classList.add(item);
    });
  }
};

const removeTwind = (el: HTMLElement, classes: string) => {
  if (classes.length > 0) {
    classes.split(' ').forEach((item) => {
      el.classList.remove(item);
    });
  }
};

const twDirective: Directive = (() => {
  const oldClasses = new WeakMap();
  return {
    beforeMount(el: HTMLElement, binding: DirectiveBinding<any>) {
      const classes = tw(binding.value);
      oldClasses.set(el, classes);
      applyTwind(el, classes);
    },
    updated(el: HTMLElement, binding: DirectiveBinding<any>) {
      const newClasses = tw(binding.value);
      removeTwind(el, oldClasses.get(el));
      applyTwind(el, newClasses);
    },
  };
})();

export default twDirective;
