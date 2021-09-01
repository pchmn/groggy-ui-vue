import { Size } from '@models/common-props.types';
import { useTheme } from '@themes/hooks/useTheme';
import { tw } from 'twind';

export interface ListProps {
  padding?: Size | 'none';
  bordered?: boolean;
  roundedRadius?: boolean;
}

export function useListClasses(props: ListProps) {
  const { theme } = useTheme();
  return tw([
    {
      [`${theme.value.components.list[props.padding as Size]}`]:
        props.padding !== 'none',
    },
    {
      'border(1 gray-300 gray-700(dark:&))': props.bordered,
    },
    {
      rounded: props.roundedRadius,
    },
  ]);
}

export function useListItemClasses(props: any) {
  const { theme } = useTheme();
  return {
    default: tw([
      theme.value.components.listItem.base,
      theme.value.components.listItem[props.size as Size],
      theme.value.components.listItem.activeColor(props.activeColor),
    ]),
    active: tw(
      `text-${props.activeColor}-400! font-medium bg(${props.activeColor}-500 opacity-15)`
    ),
  };
}
