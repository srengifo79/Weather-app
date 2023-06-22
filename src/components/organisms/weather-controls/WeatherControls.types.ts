import { AvailableCities } from '../../../types';

export type Props = {
  selectedCity: AvailableCities;
  handleCityChange: (city: AvailableCities) => void;
  onSwitch: (isChecked: boolean) => void;
};
