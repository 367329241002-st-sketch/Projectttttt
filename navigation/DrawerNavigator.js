import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabs from './MainTabs';
import HowToScreen from '../screens/HowToScreen';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, shadowOpacity: 0 },
        headerTitleStyle: { fontSize: 16, fontWeight: '600', color: '#111827' },
        headerTintColor: '#111827',
        drawerActiveTintColor: '#111827',
        drawerInactiveTintColor: '#6B7280'
      }}
    >
      {/* 1. เมนูหลัก */}
      <Drawer.Screen name="MainTabs" component={MainTabs} options={{ title: 'เมนูหลัก' }} />
      
      {/* 2. คู่มือการใช้งาน */}
      <Drawer.Screen name="HowTo" component={HowToScreen} options={{ title: 'คู่มือการใช้งาน (HowTo)' }} />
      
      {/* 3. เกี่ยวกับโปรเจกต์ */}
      <Drawer.Screen name="About" component={AboutScreen} options={{ title: 'เกี่ยวกับโปรเจกต์ (About)' }} />
    </Drawer.Navigator>
  );
}