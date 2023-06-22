import { AvailableCities } from '../../../types';

export type Props = {
  value: AvailableCities;
  onChange: (city: AvailableCities) => void;
};
