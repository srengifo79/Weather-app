import { useEffect, useState } from 'react';
import { AvailableCities, Maybe, MeasurementUnits } from '../../types';
import {
  getSessionStorageWithExpiration,
  setSessionStorageWithExpiration,
} from '../../utils';

type Response = {
  main: {
    temp: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: { icon: string }[];
};

type Params = {
  city: AvailableCities;
};

type RequestError = {
  cod?: number;
  code?: number;
  message: string;
};

export const useGetWeatherMapByCity = ({ city }: Params) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Maybe<RequestError>>(null);
  const [data, setData] = useState<Maybe<Response>>(null);

  useEffect(() => {
    const cachedResponse = getSessionStorageWithExpiration<Response>(city);

    if (cachedResponse) {
      setData(cachedResponse);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setError(null);

      const controller = new AbortController();
      const { signal } = controller;

      const path = `https://api.openweathermap.org/data/2.5/weather?appid=${
        process.env.REACT_APP_WEATHER_MAP_APP_ID
      }&q=${encodeURIComponent(city)}&units=${MeasurementUnits.METRIC}`;

      fetch(path, { signal })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong');
        })
        .then((data: Response) => {
          setSessionStorageWithExpiration<Response>(city, data, 10);
          setData(data);
          setIsLoading(false);
        })
        .catch((err: RequestError) => {
          if (err.code !== 20) {
            setError(err);
          }
        })

      return () => {
        controller.abort();
      };
    }
  }, [city]);

  return {
    data,
    isLoading,
    error,
  };
};
