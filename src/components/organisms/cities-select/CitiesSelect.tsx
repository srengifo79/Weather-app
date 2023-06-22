import { AvailableCities } from '../../../types';
import { Option, Select } from '../../atoms';
import { Props } from './CitiesSelect.types';

export const CitiesSelect = ({ value, onChange }: Props) => (
  <Select value={value}>
    {(Object.keys(AvailableCities) as (keyof typeof AvailableCities)[]).map(
      (key) => (
        <Option key={key} onClick={() => onChange(AvailableCities[key])}>
          {AvailableCities[key]}
        </Option>
      )
    )}
  </Select>
);
