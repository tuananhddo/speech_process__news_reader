import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WeatherSearch from './screens/WeatherSearch';
import ImageSearch from './screens/ImageSearch';

import Microphone from './components/Microphone';

import NewsSearch from './screens/NewsSearch';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MicrophoneStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SpeechToText"
        component={Microphone}
        options={{ title: 'Tìm kiếm tin tức' }}
      />
      <Stack.Screen
        name="WeatherSearch"
        component={WeatherSearch}
        options={{ title: 'Search weather in location' }}
      />
      <Stack.Screen
        name="ImageSearch"
        component={ImageSearch}
        options={{ title: 'Search for images' }}
      />
      <Stack.Screen
        name="NewsSearch"
        component={NewsSearch}
        options={{ title: 'News List' }}
      />
    </Stack.Navigator>
  );
};

export default MicrophoneStack;
