import { HTMLProps, ReactNode } from 'react';

type Variant = keyof Pick<
  JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
>;

export type Props = {
  children?: ReactNode;
  variant: Variant;
  restProps?: HTMLProps<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  >;
};
