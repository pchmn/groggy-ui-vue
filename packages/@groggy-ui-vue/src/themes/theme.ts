import { Variant } from '@models/common-props.types';
import { ThemeColor } from 'twind';

export type ComponentNames =
  | 'button'
  | 'checkbox'
  | 'card'
  | 'icon'
  | 'spinner';

export interface BaseClass {
  base: string;
}
export interface VariantClass {
  variant: (variant: Variant) => string;
}
export interface ColorClass {
  color: (color: string) => string;
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
    default: ThemeColor;
    primary: ThemeColor;
    secondary: ThemeColor;
    success: ThemeColor;
    info: ThemeColor;
    warning: ThemeColor;
    error: ThemeColor;
  };
  fontFamily: string[];
  components: {
    button: BaseClass &
      VariantClass &
      SizeClass &
      DisabledClass &
      RoundClass & {
        variantOutlined: (variant: Variant) => string;
      };
    checkbox: BaseClass &
      VariantClass &
      SizeClass &
      RoundClass &
      DisabledClass & {
        label: string;
        labelDisabled: string;
      };
    card: {
      base: string;
      outlined: string;
      title: string;
    };
    icon: VariantClass & ColorClass;
    spinner: VariantClass & ColorClass;
  };
}
