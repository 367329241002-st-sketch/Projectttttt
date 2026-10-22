import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; // 1. เพิ่มการ Import Ionicons

import HomeTabScreen from '../screens/HomeTabScreen';
import DetailScreen from '../screens/DetailScreen';
import TierScreen from '../screens/TierScreen';
import BudgetScreen from '../screens/BudgetScreen';
import TeamworkScreen from '../screens/TeamworkScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeTabScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#FFFFFF', borderTopColor: '#F3F4F6' },
        tabBarActiveTintColor: '#111827',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarLabelStyle: { fontSize: 11, fontWeight: '500' },
        
        // 2. เพิ่มฟังก์ชันการใส่ไอคอนตามชื่อ Route
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'RNKnowledge') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'build' : 'build-outline';
          } else if (route.name === 'Teamwork') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* 1. หน้าแรก (พร้อมกดดู Detail ได้) */}
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ tabBarLabel: 'หน้าแรก' }} />
      
      {/* 2. DATA 2: ตารางความแรง */}
      <Tab.Screen name="RNKnowledge" component={TierScreen} options={{ tabBarLabel: 'ตารางความแรง' }} />
      
      {/* 3. DATA 3: จัดสเปก */}
      <Tab.Screen name="Explore" component={BudgetScreen} options={{ tabBarLabel: 'จัดสเปก' }} />
      
      {/* 4. DATA 1: สมาชิก */}
      <Tab.Screen name="Teamwork" component={TeamworkScreen} options={{ tabBarLabel: 'สมาชิก' }} />
    </Tab.Navigator>
  );
}
