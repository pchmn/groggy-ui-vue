import { Size } from '@models/common-props.types';
import { ComponentNames, GTheme } from '@themes/theme';
import { DeepPartial } from '@utils/deepPartial';
import merge from 'deepmerge';
import { tw } from 'twind';

export interface MappedTheme {
  [key: string]: string | undefined;
}

export function getThemeColor(gTheme: GTheme, color: string): string {
  const themeColor = gTheme.colors[color];
  if (typeof themeColor === 'string') {
    return themeColor;
  }
  return themeColor[500] as string;
}

export function shadeColor(color: string, amount: number) {
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
  baseTheme: DeepPartial<GTheme>,
  newTheme: DeepPartial<GTheme>
): DeepPartial<GTheme> {
  return merge(baseTheme, newTheme);
}

export type ComponentClassesType<T> = T extends 'button'
  ? string
  : T extends 'checkbox'
  ? ToggleClasses
  : T extends 'radio'
  ? ToggleClasses
  : T extends 'icon'
  ? string
  : T extends 'spinner'
  ? string
  : T extends 'input'
  ? InputClasses
  : undefined;

export function getComponentClasses<T extends ComponentNames>(
  gTheme: GTheme,
  componentName: T,
  props: any
): ComponentClassesType<T> {
  switch (componentName) {
    case 'button':
      return getButtonClasses(
        gTheme.components.button,
        props
      ) as ComponentClassesType<T>;
    case 'checkbox':
      return getCheckboxClasses(
        gTheme.components.checkbox,
        props
      ) as ComponentClassesType<T>;
    case 'radio':
      return getRadioClasses(
        gTheme.components.radio,
        props
      ) as ComponentClassesType<T>;
    case 'icon':
      return getIconClasses(
        gTheme.components.icon,
        props
      ) as ComponentClassesType<T>;
    case 'spinner':
      return getIconClasses(
        gTheme.components.spinner,
        props
      ) as ComponentClassesType<T>;
    case 'input':
      return getInputClasses(
        gTheme.components.input,
        props
      ) as ComponentClassesType<T>;
    default:
      return undefined as ComponentClassesType<T>;
  }
}

type ButtonTheme = GTheme['components']['button'];
function getButtonClasses(componentTheme: ButtonTheme, props: any): string {
  const variantTheme =
    props.variant === 'outlined'
      ? `${componentTheme.outlined(props.color)} outlined`
      : props.variant === 'flat'
      ? `${componentTheme.flat(props.color)} flat`
      : componentTheme.standard(props.color);

  return tw([
    componentTheme.base,
    componentTheme[props.size as Size],
    props.disabled ? componentTheme.disabled : variantTheme,
    {
      [`${componentTheme.round}`]: props.round as boolean,
    },
  ]);
}

type IconTheme = GTheme['components']['icon'];
function getIconClasses(componentTheme: IconTheme, props: any): string {
  return tw(componentTheme.color(props.color));
}

type ToggleClasses = {
  inputClasses: string;
  labelClasses: string;
};
type CheckboxTheme = GTheme['components']['checkbox'];
function getCheckboxClasses(
  componentTheme: CheckboxTheme,
  props: any
): ToggleClasses {
  return {
    inputClasses: tw([
      componentTheme.base,
      componentTheme[props.size as Size],
      props.disabled
        ? componentTheme.disabled
        : componentTheme.color(props.color),
      {
        [`${componentTheme.round}`]: props.round,
      },
    ]),
    labelClasses: tw([
      componentTheme.label,
      {
        [`${componentTheme.labelDisabled}`]: props.disabled,
      },
    ]),
  };
}

type RadioTheme = GTheme['components']['radio'];
function getRadioClasses(
  componentTheme: RadioTheme,
  props: any
): ToggleClasses {
  return {
    inputClasses: tw([
      componentTheme.base,
      componentTheme[props.size as Size],
      props.disabled
        ? componentTheme.disabled
        : componentTheme.color(props.color),
    ]),
    labelClasses: tw([
      componentTheme.label,
      {
        [`${componentTheme.labelDisabled}`]: props.disabled,
      },
    ]),
  };
}

type InputClasses = {
  wrapperClasses: string;
  inputClasses: string;
  preffixSuffixClasses: string;
};
type InputTheme = GTheme['components']['input'];
function getInputClasses(componentTheme: InputTheme, props: any): InputClasses {
  return {
    wrapperClasses: tw([
      componentTheme.base,
      props.disabled
        ? componentTheme.disabled
        : props.variant === 'outlined'
        ? componentTheme.outlined(props.color)
        : componentTheme.standard(props.color),
      {
        [`${componentTheme.round}`]: props.round,
      },
    ]),
    inputClasses: tw(componentTheme[props.size as Size]),
    preffixSuffixClasses: tw(componentTheme.prefixSuffix(props.variant)),
  };
}
