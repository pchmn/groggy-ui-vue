import { Directive } from 'vue';

const clickOutsideDirective: Directive = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!(el == target || el.contains(target)) && isElementInViewport(el)) {
        if (typeof binding.value === 'function') {
          binding.value();
        }
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted: (el) => {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};

function isElementInViewport(el: any) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}

export default clickOutsideDirective;
