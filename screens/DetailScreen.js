import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/ProjectStyles';

const Tab = createBottomTabNavigator();

export default function DetailScreen({ route }) {
  const { item, cardIndex = 0 } = route.params || {};

  // 🎨 ชุดสีประจำธีมในหน้ารายละเอียด ให้ตรงกับหน้า HomeTabScreen
  const themeColors = [
    { primary: '#2563EB', light: '#EFF6FF', border: '#3B82F6' }, // ฟ้า
    { primary: '#16A34A', light: '#F0FDF4', border: '#22C55E' }, // เขียว
    { primary: '#DC2626', light: '#FEF2F2', border: '#EF4444' }, // แดง
    { primary: '#D97706', light: '#FFFBEB', border: '#F59E0B' }, // ส้ม
    { primary: '#9333EA', light: '#F3E8FF', border: '#A855F7' }, // ม่วง
  ];

  const currentTheme = themeColors[cardIndex % themeColors.length];

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { paddingBottom: 5, backgroundColor: '#FFFFFF' },
        tabBarActiveTintColor: currentTheme.primary, // 🎨 เปลี่ยนสีไอคอน Tab ตามเรื่องที่เลือก
        tabBarInactiveTintColor: '#8E8E93',
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Specs') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Troubleshoot') {
            iconName = focused ? 'build' : 'build-outline';
          } else if (route.name === 'Compatibility') {
            iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Specs"
        options={{ tabBarLabel: 'ข้อมูลสเปก' }}
        children={() => (
          <ScrollView style={styles.container}>
            {item?.image ? <Image source={{ uri: item.image }} style={styles.detailImage} /> : null}
            <View style={{ backgroundColor: currentTheme.light, padding: 12, borderRadius: 8, marginBottom: 12, borderLeftWidth: 4, borderLeftColor: currentTheme.border }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: currentTheme.primary }}>
                📌 ข้อมูล
              </Text>
            </View>
            <Text style={styles.content}>{item?.ui1 || 'ไม่มีข้อมูลส่วนนี้'}</Text>
          </ScrollView>
        )}
      />

      <Tab.Screen
        name="Troubleshoot"
        options={{ tabBarLabel: 'วิธีแก้ปัญหา' }}
        children={() => (
          <ScrollView style={styles.container}>
            {item?.image ? <Image source={{ uri: item.image }} style={styles.detailImage} /> : null}
            <View style={{ backgroundColor: currentTheme.light, padding: 12, borderRadius: 8, marginBottom: 12, borderLeftWidth: 4, borderLeftColor: currentTheme.border }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: currentTheme.primary }}>
                🛠️ วิธีแก้ไขปัญหา
              </Text>
            </View>
            <Text style={styles.content}>{item?.ui2 || 'ไม่มีข้อมูลส่วนนี้'}</Text>
          </ScrollView>
        )}
      />

      <Tab.Screen
        name="Compatibility"
        options={{ tabBarLabel: 'ความเข้ากันได้' }}
        children={() => (
          <ScrollView style={styles.container}>
            {item?.image ? <Image source={{ uri: item.image }} style={styles.detailImage} /> : null}
            <View style={{ backgroundColor: currentTheme.light, padding: 12, borderRadius: 8, marginBottom: 12, borderLeftWidth: 4, borderLeftColor: currentTheme.border }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: currentTheme.primary }}>
                ⚙️ ความเข้ากันได้ & ข้อควรระวัง
              </Text>
            </View>
            <Text style={styles.content}>{item?.ui3 || 'ไม่มีข้อมูลส่วนนี้'}</Text>
          </ScrollView>
        )}
      />
    </Tab.Navigator>
  );
}
