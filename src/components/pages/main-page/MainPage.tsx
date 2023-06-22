import { useState } from 'react';
import { WeatherControls, WeatherDisplay } from '../../organisms';
import { AvailableCities, MeasurementUnits } from '../../../types';

export const MainPage = () => {
  const [measurementUnits, setMeasurementUnits] = useState(
    MeasurementUnits.METRIC
  );
  const [selectedCity, setSelectedCity] = useState(AvailableCities.LISBON);

  const handleUnitsSwitch = (isChecked: boolean) => {
    setMeasurementUnits(
      isChecked ? MeasurementUnits.IMPERIAL : MeasurementUnits.METRIC
    );
  };

  const handleCityChange = (city: AvailableCities) => {
    setSelectedCity(city);
  };

  return (
    <>
      <WeatherControls
        selectedCity={selectedCity}
        handleCityChange={handleCityChange}
        onSwitch={handleUnitsSwitch}
      />
      <WeatherDisplay units={measurementUnits} city={selectedCity} />
    </>
  );
};
