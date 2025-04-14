import {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';
import {fetchWeatherByCoordinates} from '@api/weatherApi';

export const useWeather = () => {
  const [weather, setWeather] = useState<any>(null);

  const getPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  useEffect(() => {
    (async () => {
      const hasPermission = await getPermission();
      if (!hasPermission) {
        return;
      }
      Geolocation.getCurrentPosition(
        async position => {
          const {latitude, longitude} = position.coords;
          const weatherData = await fetchWeatherByCoordinates(
            latitude,
            longitude,
          );
          setWeather(weatherData);
        },
        async error => {
          console.error('❌ 위치 에러 fallback 동작', error);
          // fallback으로 서울 좌표 사용
          const fallbackWeather = await fetchWeatherByCoordinates(
            37.5665,
            126.978,
          );
          setWeather(fallbackWeather);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    })();
  }, []);

  return {weather};
};
