import { Theme } from '@themes/theme';
import { DeepPartial } from '@utils/deepPartial';
import merge from 'deepmerge';

export interface MappedTheme {
  [key: string]: string | undefined;
}

// export type Theme = typeof dark;

export function applyCssVariablesTheme(theme: Theme) {
  const mappedTheme = mapTheme(theme);
  if (theme) {
    const root = document.documentElement;
    for (const property in mappedTheme) {
      root.style.setProperty(property, mappedTheme[property] || null);
    }
  }
}

export function mapTheme(theme: Theme): MappedTheme {
  let mappedTheme: MappedTheme = {};

  for (const color in theme.colors) {
    if (
      [
        'default',
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'error',
      ].includes(color)
    ) {
      // @ts-expect-error cvbh
      for (const gradient in theme.colors[color]) {
        mappedTheme = {
          ...mappedTheme,
          [`--color-${color}-${gradient}-rgb`]: hexToRgb(
            // @ts-expect-error dfds
            theme.colors[color][gradient]
          ),
          // @ts-expect-error dfgdf
          [`--color-${color}-${gradient}`]: theme.colors[color][gradient],
        };
      }
      mappedTheme = {
        ...mappedTheme,
        [`--color-${color}-450-rgb`]: hexToRgb(
          // @ts-expect-error dfv
          shadeColor(theme.colors[color][500], 10)
        ),
        // @ts-expect-errorf dfgdf
        [`--color-${color}-450`]: shadeColor(theme.colors[color][500], 10),
      };
    }
  }

  mappedTheme = {
    ...mappedTheme,
    '--color-primary-text': theme.colors.primaryText,
    '--color-primary-text-rgb': hexToRgb(theme.colors.primaryText),
    '--color-background': theme.colors.background,
    '--font-family': theme.fontFamily.join(', '),
  };

  return mappedTheme;
}

function hexToRgb(hex: string) {
  hex = hex.replace('#', '');
  const r = parseInt(
    hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2),
    16
  );
  const g = parseInt(
    hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4),
    16
  );
  const b = parseInt(
    hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6),
    16
  );

  return [r, g, b].join(',');
}

function shadeColor(color: string, amount: number) {
  return (
    '#' +
    color
      .replace(/^#/, '')
      .replace(/../g, (color) =>
        (
          '0' +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
}

export function extendTheme(
  baseTheme: DeepPartial<Theme>,
  newTheme: DeepPartial<Theme>
): DeepPartial<Theme> {
  return merge(baseTheme, newTheme);
}
