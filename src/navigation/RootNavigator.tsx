import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@screens/HomeScreen';
import {NewsDetailScreen} from '@screens/NewsDetailScrenn';
import {Text, View} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  NewsDetail: {newsId: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
