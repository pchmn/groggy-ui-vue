import { useTheme } from '@themes/hooks/useTheme';
import { onMounted, onUnmounted, ref } from 'vue';

export default function useMediaQuery(
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl',
  options: 'up' | 'down' = 'up'
) {
  const { theme } = useTheme();
  const breakPointWidth = theme.value.screens[breakpoint];
  const checkMatches = () => {
    return options === 'up'
      ? window.innerWidth > breakPointWidth
      : window.innerWidth < breakPointWidth;
  };
  const width = ref(window.innerWidth);

  const matches = ref(checkMatches());

  const resize = () => {
    width.value = window.innerWidth;
    matches.value = checkMatches();
  };

  onMounted(() => window.addEventListener('resize', resize));
  onUnmounted(() => window.removeEventListener('resize', resize));

  return { matches, width };
}
