import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../styles/ProjectStyles';

const Tab = createBottomTabNavigator();

export default function DetailScreen({ route }) {
  const { item } = route.params || {};

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { paddingBottom: 5 } }}>
      <Tab.Screen name="Specs" children={() => (
        <ScrollView style={styles.container}>
          {item?.image ? <Image source={{ uri: item.image }} style={styles.detailImage} /> : null}
          <Text style={styles.title}>📌 ข้อมูล</Text>
          <Text style={styles.content}>{item?.ui1 || 'ไม่มีข้อมูลส่วนนี้'}</Text>
        </ScrollView>
      )} />
      <Tab.Screen name="Troubleshoot" children={() => (
        <ScrollView style={styles.container}>
          {item?.image ? <Image source={{ uri: item.image }} style={styles.detailImage} /> : null}
          <Text style={styles.title}>🛠️ วิธีแก้ไขปัญหา</Text>
          <Text style={styles.content}>{item?.ui2 || 'ไม่มีข้อมูลส่วนนี้'}</Text>
        </ScrollView>
      )} />
      <Tab.Screen name="Compatibility" children={() => (
        <ScrollView style={styles.container}>
          {item?.image ? <Image source={{ uri: item.image }} style={styles.detailImage} /> : null}
          <Text style={styles.title}>⚙️ ความเข้ากันได้ & ข้อควรระวัง</Text>
          <Text style={styles.content}>{item?.ui3 || 'ไม่มีข้อมูลส่วนนี้'}</Text>
        </ScrollView>
      )} />
    </Tab.Navigator>
  );
}