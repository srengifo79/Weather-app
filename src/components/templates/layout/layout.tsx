import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Header } from '../../organisms';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <Root>
    <Header title="Weather App" />
    {children}
  </Root>
);
