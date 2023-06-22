import { MeasurementUnits } from '../../types';
import { epochToTime, tempFormatter } from './weatherUtils';

describe('numberToDegreesString', () => {
  it('should format temperature in Celsius when units are metric', () => {
    const result = tempFormatter(25, MeasurementUnits.METRIC);
    expect(result).toEqual('25°C');
  });

  it('should format temperature in Fahrenheit when units are imperial', () => {
    const result = tempFormatter(77, MeasurementUnits.IMPERIAL);
    expect(result).toEqual('77°F');
  });

  it('should round temperature to the nearest whole number', () => {
    const result = tempFormatter(26.8, MeasurementUnits.METRIC);
    expect(result).toEqual('27°C');
  });

  it('should handle negative temperatures correctly', () => {
    const result = tempFormatter(-10, MeasurementUnits.METRIC);
    expect(result).toEqual('-10°C');
  });
});

test('epochToTime should convert epoch to time in the correct format', () => {
  const epoch = 1623776400;

  const result = epochToTime(epoch);

  expect(result).toMatch(/^\d{2}:\d{2}$/);
});
