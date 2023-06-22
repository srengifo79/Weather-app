import { ToggleSwitch } from '../../atoms';
import { Props } from './ToggleLabeled.types';
import { styled } from 'styled-components';
import { Typography } from '../../atoms';

export const ToggleLabeledRoot = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const Label = styled(Typography)`
  font-size: 1.375rem;
  line-height: 1.125rem;
`;

export const ToggleLabeled = ({
  optionOneLabel,
  optionTwoLabel,
  onChange,
}: Props) => (
  <ToggleLabeledRoot>
    <Label variant="span">{optionOneLabel}</Label>
    <ToggleSwitch onChange={onChange} />
    <Label variant="span">{optionTwoLabel}</Label>
  </ToggleLabeledRoot>
);
