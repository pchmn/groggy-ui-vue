import { Color, Size } from '@models/common-props.types';
import { PropType } from 'vue';

const componentFormProps = {
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

export default componentFormProps;
