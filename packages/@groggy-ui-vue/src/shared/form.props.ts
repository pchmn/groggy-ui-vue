import { Color, Size, Status, Variant } from '@models/common-props.types';
import { PropType } from 'vue';

export const componentFormProps = {
  id: String,
  name: String,
  disabled: Boolean,
  color: {
    type: String as PropType<Color>,
    default: 'primary',
  },
  size: {
    type: String as PropType<Size>,
    default: 'md',
  },
};

export const componentInputTextPorps = {
  placeholder: String,
  variant: {
    type: String as PropType<Variant>,
    default: 'standard',
  },
  status: String as PropType<Status>,
  helperText: String,
};
