import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>ℹ️ เกี่ยวกับโปรเจกต์ (About Project)</Text>
      <Text style={styles.headerSub}>Smart Content Hub - React Native Application</Text>

      <View style={styles.card}>
        <Text style={styles.title}>วัตถุประสงค์ของแอปพลิเคชัน</Text>
        <Text style={styles.body}>
          แอปพลิเคชันนี้รวบรวมข้อมูลคู่มือจัดสเปกคอมพิวเตอร์ การเปรียบเทียบฮาร์ดแวร์ และการแก้ไขปัญหา PC
          พัฒนาขึ้นเพื่อตอบโจทย์การทำงานร่วมกับ Data 3 ชุด การใช้งาน Navigation ทั้ง Drawer, Tab และ Stack สไตล์ Minimal
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>เทคโนโลยีที่ใช้</Text>
        <Text style={styles.body}>• React Native & Expo</Text>
        <Text style={styles.body}>• React Navigation (Drawer / Tab / Stack)</Text>
        <Text style={styles.body}>• Remote JSON Data via GitHub Raw URL</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFFFFF' },
  headerTitle: { fontSize: 20, fontWeight: '600', color: '#111827', marginBottom: 4 },
  headerSub: { fontSize: 13, color: '#6B7280', marginBottom: 20 },
  card: { backgroundColor: '#FAFAFA', borderRadius: 12, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#F3F4F6' },
  title: { fontSize: 15, fontWeight: '600', color: '#111827', marginBottom: 8 },
  body: { fontSize: 13, color: '#4B5563', lineHeight: 20 }
});