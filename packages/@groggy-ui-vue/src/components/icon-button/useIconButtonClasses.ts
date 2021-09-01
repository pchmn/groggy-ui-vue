import { Size, Variant } from '@models/common-props.types';
import { useTheme } from '@themes/hooks/useTheme';
import { tw } from 'twind';

export default function useIconButtonClasses(props: any) {
  const { theme } = useTheme();

  return tw([
    theme.value.components.iconButton.base,
    theme.value.components.iconButton[props.size as Size],
    theme.value.components.iconButton[props.variant as Variant](
      props.color,
      props.colorShade
    ),
    {
      [theme.value.components.iconButton.round]: props.round,
    },
  ]);
}
