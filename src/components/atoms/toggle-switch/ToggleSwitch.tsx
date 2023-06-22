import React, { useState } from 'react';
import { Props } from './ToggleSwitch.types';
import { styled } from 'styled-components';

export const ToggleSwitchRoot = styled.label`
  position: relative;
  display: inline-block;
  width: 2.1rem;
  height: 1rem;
  margin-left: 1rem;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ theme }) => theme.colors.contrast};
  }

  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + span:before {
    transform: translateX(1.5rem);
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 1.5rem;
    width: 1.5rem;
    left: -0.5rem;
    top: -0.25rem;
    background-color: ${({ theme }) => theme.colors.contrast};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const ToggleSwitch = ({ className, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    onChange(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <ToggleSwitchRoot className={className}>
      <ToggleInput
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <ToggleSlider />
    </ToggleSwitchRoot>
  );
};
