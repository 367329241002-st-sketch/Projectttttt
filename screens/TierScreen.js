import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function TierScreen() {
  const tiers = [
    {
      level: '🔥 High-End Tier (ระดับท็อป - เล่นเกม 2K / 4K ลื่นๆ)',
      // รูปการ์ดจอไฮเอนด์ / คอมพิวเตอร์สเปกสูง
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      gpu: 'RTX 4070 Ti / RX 7900 XT (เหมาะกับเกมปรับสุด Ray Tracing เปิดสุดทุกอย่าง)',
      cpu: 'Ryzen 7 7800X3D / Core i7-14700K (ซีพียูเกมมิ่งที่ดีที่สุดในตลาด)',
      compareNote: '💡 จุดเปรียบเทียบ: แรงกว่ารุ่น Mid-End ประมาณ 40-50% แต่กินไฟมากกว่าและราคาค่อนข้างสูง เหมาะกับคนใช้จอความละเอียดสูง 1440p หรือ 4K ขึ้นไป'
    },
    {
      level: '⚡ Mid-Range Tier (ระดับกลาง - ยอดฮิต เล่นเกม 1080p / 2K คุ้มค่าที่สุด)',
      // รูปซีพียู / เมนบอร์ดฮาร์ดแวร์
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
      gpu: 'RTX 3060 Ti / RX 6700 XT (เล่นเกมกินสเปกได้สบาย เฟรมเรตทะลุ 100+ FPS)',
      cpu: 'Ryzen 5 5600 / Core i5-12400F (คุ้มค่าคุ้มราคาที่สุดในงบประหยัด)',
      compareNote: '💡 จุดเปรียบเทียบ: เป็นเรทที่ "คุ้มค่าเงิน" มากที่สุดในยุคนี้ เล่นเกมได้ทุกเกมบนโลกในความละเอียด Full HD (1080p) แบบปรับภาพ High-Ultra ได้สบายๆ'
    },
    {
      level: '💡 Entry-Level Tier (ระดับเริ่มต้น - เน้นประหยัด เล่นเกมออนไลน์ eSports)',
      // รูปชิ้นส่วนพีซี / แรม / การ์ดจอเริ่มต้น
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80',
      gpu: 'RTX 3050 / GTX 1650 / RX 6400 (เหมาะกับ Valorant, CS2, Roblox, LoL)',
      cpu: 'Core i3-12100F / Ryzen 3 4100 (ราคาประหยัด งบน้อยเริ่มต้นได้)',
      compareNote: '💡 จุดเปรียบเทียบ: เหมาะสำหรับคนงบน้อย เน้นเล่นเกมออนไลน์ทั่วไป ไม่แนะนำให้เอาไปเล่นเกมระดับ AAA ปรับกราฟิกสูงๆ เพราะ VRAM และความแรงอาจจะไม่พอ'
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📊 เปรียบเทียบระดับความแรง GPU / CPU (Tier List)</Text>
      <Text style={styles.subHeader}>คู่มือเปรียบเทียบความคุ้มค่าและระดับความแรงก่อนตัดสินใจซื้อ</Text>

      {tiers.map((item, idx) => (
        <View key={idx} style={styles.tierCard}>
          <Image source={{ uri: item.image }} style={styles.tierImage} />
          
          <Text style={styles.levelTitle}>{item.level}</Text>
          <Text style={styles.specText}>• การ์ดจอ (GPU): {item.gpu}</Text>
          <Text style={styles.specText}>• ซีพียู (CPU): {item.cpu}</Text>
          
          <View style={styles.noteBox}>
            <Text style={styles.noteText}>{item.compareNote}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f8f9fa' },
  header: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 5, color: '#333' },
  subHeader: { fontSize: 13, textAlign: 'center', marginBottom: 15, color: '#666' },
  tierCard: { backgroundColor: '#fff', borderRadius: 8, padding: 15, marginBottom: 15, elevation: 2, overflow: 'hidden' },
  tierImage: { width: '100%', height: 160, borderRadius: 6, marginBottom: 12, resizeMode: 'cover', backgroundColor: '#e9ecef' },
  levelTitle: { fontSize: 15, fontWeight: 'bold', color: '#007bff', marginBottom: 8, lineHeight: 20 },
  specText: { fontSize: 13, color: '#444', lineHeight: 20, marginBottom: 4 },
  noteBox: { marginTop: 10, padding: 10, backgroundColor: '#eef6ff', borderRadius: 6 },
  noteText: { fontSize: 12, color: '#0056b3', lineHeight: 18, fontWeight: '600' }
});