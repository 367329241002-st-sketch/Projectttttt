import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function BudgetScreen() {
  const [selectedBudget, setSelectedBudget] = useState('40000');

  const buildData = {
    '15000': {
      title: 'สเปกประหยัดคุ้มค่า (งบ ~15,000 บาท)',
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80',
      parts: [
        { name: 'CPU', detail: 'AMD Ryzen 3 4100 / Core i3-12100F', price: '3,100 ฿' },
        { name: 'GPU', detail: 'AMD Radeon RX 6600 8GB', price: '7,000 ฿' },
        { name: 'RAM', detail: '16GB (8x2) DDR4 3200MHz', price: '1,200 ฿' },
        { name: 'SSD', detail: 'M.2 NVMe 500GB', price: '1,300 ฿' },
        { name: 'Mainboard', detail: 'A520M / H610M', price: '2,200 ฿' },
        { name: 'PSU', detail: '550W 80+', price: '1,300 ฿' },
      ],
      total: '16,100 ฿'
    },
    '25000': {
      title: 'สเปกยอดฮิต เล่นเกม 1080p (งบ ~25,000 บาท)',
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80',
      parts: [
        { name: 'CPU', detail: 'AMD Ryzen 5 5600 / Core i5-12400F', price: '4,800 ฿' },
        { name: 'GPU', detail: 'NVIDIA RTX 3060 Ti / RTX 4060', price: '11,500 ฿' },
        { name: 'RAM', detail: '16GB (8x2) DDR4 3200MHz', price: '1,200 ฿' },
        { name: 'SSD', detail: 'M.2 NVMe 1TB PCIe 4.0', price: '2,200 ฿' },
        { name: 'Mainboard', detail: 'B450M / B660M', price: '3,200 ฿' },
        { name: 'PSU', detail: '650W 80+ Bronze', price: '1,700 ฿' },
      ],
      total: '24,600 ฿'
    },
    '40000': {
      title: '⚡ สเปกสายแรงเพียวๆ แรงสุดในงบ (งบ ~40,000 บาท)',
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      parts: [
        { name: 'CPU', detail: 'AMD Ryzen 5 7500F (6C/12T บูสต์แรงเล่นเกมโหด)', price: '5,800 ฿' },
        { name: 'GPU', detail: 'NVIDIA RTX 4070 Ti Super 16GB / RX 7900 XT', price: '27,500 ฿' },
        { name: 'RAM', detail: '16GB (8x2) DDR5 5600MHz High-Speed', price: '1,900 ฿' },
        { name: 'SSD', detail: 'M.2 NVMe 500GB PCIe 4.0 (เน้นความไว)', price: '1,400 ฿' },
        { name: 'Mainboard', detail: 'A620M / B650M สายซัพพอร์ตไฟแรง', price: '2,900 ฿' },
        { name: 'PSU', detail: '750W 80+ Bronze (จัดไฟพอดีกับการ์ดจอท็อป)', price: '2,100 ฿' },
      ],
      total: '41,600 ฿'
    }
  };

  const currentBuild = buildData[selectedBudget] || buildData['40000'];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.headerTitle}>จัดสเปกตามงบประมาณ</Text>
      <Text style={styles.headerSub}>คำนวณและประมาณการราคาชิ้นส่วนจริง</Text>

      {/* ปุ่มสลับงบประมาณทรงโค้งมน Minimal */}
      <View style={styles.tabRow}>
        {['15000', '25000', '40000'].map((b) => (
          <TouchableOpacity
            key={b}
            style={[styles.tabBtn, selectedBudget === b && styles.tabBtnActive]}
            activeOpacity={0.8}
            onPress={() => setSelectedBudget(b)}
          >
            <Text style={[styles.tabText, selectedBudget === b && styles.tabTextActive]}>
              {parseInt(b).toLocaleString()} ฿
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.card}>
        {currentBuild?.image ? (
          <Image source={{ uri: currentBuild.image }} style={styles.image} />
        ) : null}
        <Text style={styles.buildTitle}>{currentBuild.title}</Text>

        <View style={{ marginTop: 12 }}>
          {currentBuild.parts.map((p, idx) => (
            <View key={idx} style={styles.partRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.partTag}>{p.name}</Text>
                <Text style={styles.partDetail}>{p.detail}</Text>
              </View>
              <Text style={styles.partPrice}>{p.price}</Text>
            </View>
          ))}
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>รวมประมาณ</Text>
          <Text style={styles.totalValue}>{currentBuild.total}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFFFFF' },
  headerTitle: { fontSize: 22, fontWeight: '600', color: '#111827', marginBottom: 4 },
  headerSub: { fontSize: 14, color: '#6B7280', marginBottom: 20 },
  tabRow: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  tabBtn: { 
    flex: 1, 
    paddingVertical: 12, 
    borderRadius: 20, 
    backgroundColor: '#F3F4F6', 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  tabBtnActive: { 
    backgroundColor: '#111827',
    borderColor: '#111827'
  },
  tabText: { fontSize: 13, fontWeight: '500', color: '#4B5563' },
  tabTextActive: { color: '#FFFFFF' },
  card: { backgroundColor: '#FAFAFA', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: '#F3F4F6', marginBottom: 30 },
  image: { width: '100%', height: 160, borderRadius: 8, marginBottom: 16, resizeMode: 'cover', backgroundColor: '#F3F4F6' },
  buildTitle: { fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 8 },
  partRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  partTag: { fontSize: 11, fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase' },
  partDetail: { fontSize: 13, color: '#374151', marginTop: 2 },
  partPrice: { fontSize: 13, fontWeight: '500', color: '#111827' },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, paddingTop: 12 },
  totalLabel: { fontSize: 14, color: '#6B7280' },
  totalValue: { fontSize: 18, fontWeight: '600', color: '#111827' }
});