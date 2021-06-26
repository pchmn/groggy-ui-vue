import { tw } from 'twind';
import { Directive } from 'vue';

const twDirective: Directive = {
  beforeMount(el, binding) {
    const classes = tw(binding.value);
    if (classes.length > 0) {
      classes.split(' ').forEach((item) => {
        el.classList.add(item);
      });
    }
  },
};

export default twDirective;
