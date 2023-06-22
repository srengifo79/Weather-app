import { Props } from './Typography.types';
import { styled } from 'styled-components';

export const Typography = styled(
  ({ children, variant, ...restProps }: Props) => {
    const Component = variant;

    return <Component {...restProps}>{children}</Component>;
  }
)`
  color: ${({ theme }) => theme.colors.text};
`;
