import { MeasurementUnits } from '../../types';

const formatterCelsius = new Intl.NumberFormat('en', {
  unit: 'celsius',
  style: 'unit',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formatterFahrenheit = new Intl.NumberFormat('en', {
  unit: 'fahrenheit',
  style: 'unit',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const tempFormatter = (temp: number, units: MeasurementUnits) => {
  if (units === MeasurementUnits.METRIC) {
    return formatterCelsius.format(temp);
  } else {
    return formatterFahrenheit.format(temp);
  }
};

export const epochToTime = (epoch: number) => {
  const timestamp = epoch * 1000;
  const dateObj = new Date(timestamp);

  const userLanguage = navigator.language || 'en-US';

  const formatter = new Intl.DateTimeFormat(userLanguage, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  return formatter.format(dateObj);
};
