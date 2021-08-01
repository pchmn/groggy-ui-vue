import { Color, Variant } from '@models/common-props.types';
import { ThemeColor } from 'twind';
import * as colors from 'twind/colors';

export type TwColors = keyof typeof colors;

export type ComponentNames =
  | 'button'
  | 'checkbox'
  | 'card'
  | 'icon'
  | 'spinner'
  | 'radio'
  | 'input'
  | 'switch';

export interface BaseClass {
  base: string;
}
export interface ColorClass {
  color: (color: Color) => string;
}
export interface VariantClass {
  standard: (color: Color) => string;
  outlined: (color: Color) => string;
}
export interface SizeClass {
  sm: string;
  md: string;
  lg: string;
}
export interface MoreSizeClass extends SizeClass {
  xs: string;
  xl: string;
}
export interface RoundClass {
  round: string;
}
export interface DisabledClass {
  disabled: string;
}
export interface LabelClass {
  label: string;
  labelDisabled: string;
}

export interface GTheme {
  colors: {
    neutral: ThemeColor;
    primary: ThemeColor;
    secondary: ThemeColor;
    success: ThemeColor;
    info: ThemeColor;
    warning: ThemeColor;
    error: ThemeColor;
    [key: string]: ThemeColor;
  };
  fontFamily: string[];
  components: {
    button: BaseClass &
      VariantClass &
      SizeClass &
      DisabledClass &
      RoundClass & {
        flat: (color: Color) => string;
      };
    checkbox: BaseClass &
      ColorClass &
      SizeClass &
      RoundClass &
      DisabledClass &
      LabelClass;
    radio: BaseClass & ColorClass & SizeClass & DisabledClass & LabelClass;
    switch: BaseClass &
      SizeClass &
      DisabledClass &
      LabelClass &
      ColorClass & {
        circle: string;
      };
    card: {
      base: string;
      outlined: string;
      title: string;
    };
    icon: ColorClass & ColorClass;
    spinner: ColorClass & ColorClass;
    input: BaseClass &
      VariantClass &
      SizeClass &
      RoundClass &
      DisabledClass & {
        prefixSuffix: (variant: Variant) => string;
      };
    select: BaseClass &
      VariantClass &
      SizeClass &
      RoundClass &
      DisabledClass & {
        optionClass: string;
        optionsContainerClass: string;
      };
  };
}
