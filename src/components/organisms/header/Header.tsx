import { Props } from './Header.types';
import { Typography } from '../../atoms';
import { styled } from 'styled-components';

export const HeaderRoot = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = ({ className, title }: Props) => (
  <HeaderRoot className={className}>
    <Typography variant="h1">{title}</Typography>
  </HeaderRoot>
);
