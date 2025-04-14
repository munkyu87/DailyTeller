import styles from '@styles/WeatherWidget.styles';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {useWeather} from 'hooks/useWeather';
import colors from '@colors/colors';

const WeatherWidget = () => {
  const {weather} = useWeather();

  const weatherText = getWeatherText(weather?.weathercode);
  const weatherStyle = getWeatherStyle(weather?.weathercode);

  return (
    <View style={styles.container}>
      <View style={[styles.weatherBox, {backgroundColor: weatherStyle.bg}]}>
        <Text style={[styles.weatherText, {color: weatherStyle.text}]}>
          {weatherText.emoji} {weatherText.label}
        </Text>
        <Text style={[styles.temperature, {color: weatherStyle.text}]}>
          {weather?.temperature}°C
        </Text>
      </View>
    </View>
  );
};

const getWeatherText = (code?: number): {label: string; emoji: string} => {
  switch (code) {
    case 0:
      return {label: '맑음', emoji: '🌞'};
    case 1:
    case 2:
    case 3:
      return {label: '구름 조금', emoji: '⛅'};
    case 45:
    case 48:
      return {label: '안개', emoji: '🌫️'};
    case 51:
    case 61:
      return {label: '비', emoji: '🌧️'};
    case 80:
    case 81:
      return {label: '소나기', emoji: '🌦️'};
    default:
      return {label: '날씨 정보 없음', emoji: '❓'};
  }
};

const getWeatherStyle = (code?: number): {bg: string; text: string} => {
  switch (code) {
    case 0:
      return colors.weather.clear;
    case 1:
    case 2:
    case 3:
      return colors.weather.cloudy;
    case 45:
    case 48:
      return colors.weather.fog;
    case 51:
    case 61:
      return colors.weather.rain;
    case 80:
    case 81:
      return colors.weather.shower;
    default:
      return colors.weather.default;
  }
};
export default WeatherWidget;
