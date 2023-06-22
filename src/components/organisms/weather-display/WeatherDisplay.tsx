import { useGetWeatherMapByCity } from '../../../services';
import { MeasurementUnits } from '../../../types';
import { epochToTime, tempFormatter } from '../../../utils';
import { celsiusToFahrenheit } from '../../../utils/celcious-to-fahrenheit/celciousToFahrenheit';
import { Spinner } from '../../atoms';
import { Props } from './WeatherDisplay.types';

import { styled } from 'styled-components';
import { Typography } from '../../atoms';

export const WeatherDisplayRoot = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Temperature = styled(Typography)`
  font-size: 20vw;
  font-weight: bold;
`;

export const SunriseSundownRoot = styled.div`
  display: flex;
  column-gap: 3rem;
`;

export const SunriseSundownLabel = styled(Typography)`
  font-size: 1.2rem;
`;

export const WeatherIcon = styled.img`
  width: 6rem;
`;

export const ErrorMessage = styled(Typography)``;

export const WeatherDisplay = ({ units, city }: Props) => {
  const { data, isLoading, error } = useGetWeatherMapByCity({ city });

  if (error) {
    return (
      <WeatherDisplayRoot>
        <ErrorMessage variant="span">
          Something when wrong, please try again later
        </ErrorMessage>
      </WeatherDisplayRoot>
    );
  }

  if (isLoading)
    return (
      <WeatherDisplayRoot>
        <Spinner />
      </WeatherDisplayRoot>
    );

  if (!data) return null;

  const {
    main: { temp },
    sys: { sunrise, sunset },
    weather: [{ icon }],
  } = data;

  const convertedTemp =
    units === MeasurementUnits.METRIC ? temp : celsiusToFahrenheit(temp);

  return (
    <WeatherDisplayRoot>
      <Temperature variant="span">
        {tempFormatter(convertedTemp, units)}
      </Temperature>
      <WeatherIcon
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />
      <SunriseSundownRoot>
        <SunriseSundownLabel variant="span">
          {`Sunrise: ${epochToTime(sunrise)}`}
        </SunriseSundownLabel>
        <SunriseSundownLabel variant="span">
          {`Sunset: ${epochToTime(sunset)}`}
        </SunriseSundownLabel>
      </SunriseSundownRoot>
    </WeatherDisplayRoot>
  );
};
