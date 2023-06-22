import { celsiusToFahrenheit } from './celciousToFahrenheit';

describe('Temperature Converter', () => {
  test('Converts 0 degrees Celsius to Fahrenheit', () => {
    const celsius = 0;
    const expectedFahrenheit = 32;
    const result = celsiusToFahrenheit(celsius);
    expect(result).toBe(expectedFahrenheit);
  });

  test('Converts positive Celsius temperature to Fahrenheit', () => {
    const celsius = 25;
    const expectedFahrenheit = 77;
    const result = celsiusToFahrenheit(celsius);
    expect(result).toBe(expectedFahrenheit);
  });

  test('Converts negative Celsius temperature to Fahrenheit', () => {
    const celsius = -10;
    const expectedFahrenheit = 14;
    const result = celsiusToFahrenheit(celsius);
    expect(result).toBe(expectedFahrenheit);
  });

  test('Converts decimal Celsius temperature to Fahrenheit', () => {
    const celsius = 30.5;
    const expectedFahrenheit = 86.9;
    const result = celsiusToFahrenheit(celsius);
    expect(result).toBeCloseTo(expectedFahrenheit);
  });
});
