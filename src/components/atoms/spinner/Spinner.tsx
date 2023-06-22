import { keyframes, styled } from 'styled-components';

const rotationAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const SpinnerRoot = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotationAnimation} 1s linear infinite;
`;

export const Spinner = () => <SpinnerRoot />;
