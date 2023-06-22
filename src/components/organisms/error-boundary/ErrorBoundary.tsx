import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const ErrorMessage = styled.h1`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.text};
`;

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <ErrorMessage>{'Something went wrong :('}</ErrorMessage>
        </Container>
      );
    }

    return this.props.children;
  }
}
