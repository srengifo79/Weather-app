import { Props } from './Option.types';

import { styled } from 'styled-components';

export const OptionRoot = styled.div`
  padding: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const Option = ({ children, ...restProps }: Props) => (
  <OptionRoot {...restProps}>{children}</OptionRoot>
);
