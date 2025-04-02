import styles from '@styles/WeatherWidget.styles';
import React from 'react';
import {View, Text, Image} from 'react-native';


const WeatherWidget = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://example.com/weather-icon.png'}}
        style={styles.icon}
      />
      <Text style={styles.temperature}>22°C</Text>
    </View>
  );
};

export default WeatherWidget;
