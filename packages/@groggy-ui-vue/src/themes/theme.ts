import { Variant } from '@models/common-props.types';

export interface Color {
  [key: number]: string;
}

export interface Theme {
  colors: {
    default: Color;
    primary: Color;
    secondary: Color;
    success: Color;
    info: Color;
    warning: Color;
    error: Color;

    primaryText: string;
    background: string;
  };
  fontFamily: string[];
  components: {
    button: {
      base: string;
      variant: (variant: Variant) => string;
      variantOutlined: (variant: Variant) => string;
      disabled: string;
      round: string;
      sm: string;
      md: string;
      lg: string;
    };
  };
}
