// AppNavigator.jsx
import React from 'react';
import { Stack } from 'expo-router';
import Home from './index';
import EventDetails from '../components/home/eventdetails/eventdetails';

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: '#40DA46' },
          headerShadowVisible: false,
          headerTitle: "Filter",
        }}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetails}
        options={{
          headerStyle: { backgroundColor: '#40DA46' },
          headerShadowVisible: false,
          headerTitle: "Event Details",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
