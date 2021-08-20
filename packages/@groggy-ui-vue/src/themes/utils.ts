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

export function colorOpacity(hexColor: string, alpha: number) {
  return `#${hexColor.replace('#', '')}${Math.floor(alpha * 255)
    .toString(16)
    .padStart(2)}`;
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
  : T extends 'switch'
  ? SwitchClasses
  : T extends 'select'
  ? SelectClasses
  : undefined;

export function getComponentClasses<T extends ComponentNames>(
  gTheme: GTheme,
  componentName: T,
  props: any,
  options?: any
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
    case 'switch':
      return getSwitchClasses(
        gTheme.components.switch,
        props,
        options
      ) as ComponentClassesType<T>;
    case 'select':
      return getSelectClasses(
        gTheme.components.select,
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
  return tw(componentTheme.color(props.color, props.colorShade));
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
      props.disabled && componentTheme.labelDisabled,
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

type SelectClasses = {
  inputClasses: {
    open: string;
    default: string;
  };
  iconClasses: {
    default: string;
    open: string;
  };
  optionsContainerClasses: string;
  optionClasses: {
    default: string;
    active: string;
    selected: string;
  };
};
type SelectTheme = GTheme['components']['select'];
function getSelectClasses(
  componentTheme: SelectTheme,
  props: any
): SelectClasses {
  return {
    inputClasses: {
      default: tw([
        componentTheme.base,
        componentTheme[props.size as Size],
        props.disabled
          ? componentTheme.disabled
          : props.variant === 'outlined'
          ? componentTheme.outlined(props.color)
          : componentTheme.standard(props.color),
        {
          [`${componentTheme.round}`]: props.round,
        },
      ]),
      open: tw(
        `ring ring(${props.color}-500 opacity-40) border(${props.color}-500! opacity-100) bg(${props.color}-500! opacity-10!) dark:bg(${props.color}-500! opacity-10!)`
      ),
    },
    iconClasses: {
      default: tw('duration-200'),
      open: tw('rotate-180'),
    },
    optionsContainerClasses: tw(componentTheme.optionsContainerClass),
    optionClasses: {
      default: tw(componentTheme.optionClasses),
      active: tw(`bg(${props.color}-500 opacity-15)`),
      selected: tw(`text-${props.color}-400! font-medium`),
    },
  };
}

type SwitchClasses = {
  switchClasses: string;
  circleClasses: string;
  labelClasses: string;
};
type SwitchTheme = GTheme['components']['switch'];
function getSwitchClasses(
  componentTheme: SwitchTheme,
  props: any,
  enabled: boolean
): SwitchClasses {
  const translateCircle =
    props.size === 'sm'
      ? 'translate-x-3'
      : props.size === 'md'
      ? 'translate-x-4'
      : 'translate-x-5';
  return {
    switchClasses: tw([
      componentTheme.base,
      componentTheme[props.size as Size],
      componentTheme.color(props.color),
      props.disabled && componentTheme.disabled,
      enabled ? `bg-${props.color}-500` : `bg(gray-500 opacity-75)`,
    ]),
    labelClasses: tw([
      componentTheme.label,
      props.disabled && componentTheme.labelDisabled,
    ]),
    circleClasses: tw([
      componentTheme.circle,
      enabled ? translateCircle : 'translate-x-0.5',
    ]),
  };
}
