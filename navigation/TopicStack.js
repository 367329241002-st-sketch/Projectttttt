import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabScreen from '../screens/HomeTabScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

export default function TopicStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeTabScreen" component={HomeTabScreen} options={{ title: 'สเปกคอม & แก้ไขปัญหา' }} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'รายละเอียด' }} />
    </Stack.Navigator>
  );
}