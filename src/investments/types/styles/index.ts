import { Complete } from '../ts';
import { FlattenInterpolation, ThemedStyledProps } from 'styled-components';

export type StyledTransient<T> = {
  [P in keyof T & string as `$${P}`]: T[P];
};

export type StyledTransientComplete<T> = Complete<{
  [P in keyof T & string as `$${P}`]: T[P];
}>;

/* Размеры компонентов */
export enum EDimension {
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

export type TCssMixin<Props = any> = FlattenInterpolation<Props> | string;

export type TCSSMixinFn<Props = any> = (props: Props) => TCssMixin<Props>;
