import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Microphone from './components/Microphone';

import NewsSearch from './screens/NewsSearch';
import MultipleCredit from './components/MultipleCredit';

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
        name="Help"
        component={MultipleCredit}
        options={{ title: 'Information' }}
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
