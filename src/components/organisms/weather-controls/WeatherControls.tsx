import { ToggleLabeled } from '../../molecules';
import { CitiesSelect } from '../cities-select/CitiesSelect';
import { Props } from './WeatherControls.types';

import { styled } from 'styled-components';

export const WeatherControlsRoot = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-around;
`;

export const WeatherControls = ({
  handleCityChange,
  selectedCity,
  onSwitch,
}: Props) => {
  return (
    <WeatherControlsRoot>
      <CitiesSelect onChange={handleCityChange} value={selectedCity} />
      <ToggleLabeled
        optionOneLabel="°C"
        optionTwoLabel="°F"
        onChange={onSwitch}
      />
    </WeatherControlsRoot>
  );
};
