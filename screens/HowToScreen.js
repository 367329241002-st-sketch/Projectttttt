import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HowToScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.headerTitle}>
        📖 คู่มือการใช้งานแอปพลิเคชัน (How To)
      </Text>
      <Text style={styles.headerSub}>
        คำแนะนำการสลับดูข้อมูลและใช้งานระบบตามโครงสร้างโจทย์
      </Text>

      <View style={styles.card}>
        <Text style={styles.stepTitle}>
          1. การใช้งาน Bottom Tab (แถบเมนูด้านล่าง)
        </Text>
        <Text style={styles.stepDetail}>
          • <Text style={styles.bold}>หน้าแรก:</Text>{' '}
          รวบรวมข้อมูลคู่มือและวิธีแก้ปัญหา PC
          สามารถกดคลิกที่การ์ดเพื่อดูรายละเอียดเชิงลึก (Detail View) ได้
        </Text>
        <Text style={styles.stepDetail}>
          • <Text style={styles.bold}>(ตารางความแรง):</Text>{' '}
          เปรียบเทียบระดับความแรงและสเปกของฮาร์ดแวร์ (GPU / CPU)
        </Text>
        <Text style={styles.stepDetail}>
          • <Text style={styles.bold}>(จัดสเปกคอม):</Text>{' '}
          ระบบคำนวณงบประมาณจัดสเปกคอมพิวเตอร์ตามเรทราคาจริง
        </Text>
        <Text style={styles.stepDetail}>
          • <Text style={styles.bold}>(สมาชิก):</Text>{' '}
          แสดงรายชื่อสมาชิกผู้จัดทำโปรเจกต์ (ย้ายมาไว้ช่องหลังสุด)
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.stepTitle}>
          2. การใช้งานเมนู Drawer (แถบเมนูด้านข้าง)
        </Text>
        <Text style={styles.stepDetail}>
          • เปิดเมนูด้านข้างเพื่อสลับไปยังหน้าคู่มือการใช้งาน (How To)
          หรือหน้าเกี่ยวกับโปรเจกต์ (About) ได้ตลอดเวลา
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFFFFF' },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  headerSub: { fontSize: 13, color: '#6B7280', marginBottom: 20 },
  card: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  stepDetail: {
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 6,
  },
  bold: { fontWeight: '600', color: '#111827' },
});
