import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { localTopics } from '../data/Topic';
import { styles } from '../styles/ProjectStyles';

// 🔗 ลิงก์ JSON บน GitHub
const REMOTE_URL =
  'https://raw.githubusercontent.com/367329241002-st-sketch/Projectttttt/refs/heads/main/react_native_knowledge_24_topics.json';

// 🖼️ โฟลเดอร์ฐานของรูปใน repo (ถ้ารูปอยู่ที่ assets/images/ ให้เปลี่ยนเป็น .../main/assets/)
const IMAGE_BASE =
  'https://raw.githubusercontent.com/367329241002-st-sketch/Projecttttt/refs/heads/main/';

// แปลง path แบบ "images/rn01.png" ให้เป็น URL เต็ม
const getImageUri = (img) => {
  if (!img) return null;
  return img.startsWith('http') ? img : IMAGE_BASE + img;
};

// ปรับรูปแบบข้อมูลจาก JSON ให้ตรงกับที่หน้าจอใช้ (title / description / image)
const normalizeTopic = (t, index) => ({
  ...t,
  id: t.id ?? String(index),
  title: t.title || t.topic || 'ไม่มีชื่อหัวข้อ',
  description: t.description || t.summary || t.concept || '',
  image: getImageUri(t.image),
});

export default function HomeTabScreen({ navigation }) {
  const [data, setData] = useState(localTopics);
  const [sourceType, setSourceType] = useState('local');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // 🎨 กำหนดชุดสีสำหรับสลับทีละแถบ (พาสเทลอ่านง่าย)
  const cardColors = [
    { bg: '#EFF6FF', border: '#3B82F6', theme: '#2563EB' }, // แถบ 1: ฟ้า
    { bg: '#F0FDF4', border: '#22C55E', theme: '#16A34A' }, // แถบ 2: เขียว
    { bg: '#FEF2F2', border: '#EF4444', theme: '#DC2626' }, // แถบ 3: แดง
    { bg: '#FFFBEB', border: '#F59E0B', theme: '#D97706' }, // แถบ 4: ส้ม/เหลือง
    { bg: '#F3E8FF', border: '#A855F7', theme: '#9333EA' }, // แถบ 5: ม่วง
  ];

  const loadLocalData = () => {
    setErrorMsg('');
    setSourceType('local');
    setData(localTopics);
  };

  const loadRemoteData = async () => {
    setSourceType('remote');
    setErrorMsg('');
    setLoading(true);
    try {
      // ?t=Date.now() + no-store ช่วยกันแคช จะได้ข้อมูลล่าสุดทุกครั้งที่กด
      const res = await fetch(`${REMOTE_URL}?t=${Date.now()}`, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      const list = Array.isArray(json) ? json : [];
      if (list.length === 0) throw new Error('JSON ว่างเปล่า');
      setData(list.map(normalizeTopic));
    } catch (e) {
      setErrorMsg('โหลดจากลิงก์ไม่สำเร็จ: ' + e.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>สเปกคอม & แก้ไขปัญหา</Text>
      <Text style={styles.headerSub}>
        แหล่งข้อมูล: {sourceType === 'local' ? '📁 ไฟล์ในเครื่อง' : '🌐 ลิงก์ภายนอก (.json)'}
      </Text>

      {/* ปุ่มกดสลับโหมด */}
      <View style={styles.btnRow}>
        <TouchableOpacity
          style={[styles.btnMinimal, sourceType === 'local' && styles.btnMinimalActive]}
          activeOpacity={0.8}
          onPress={loadLocalData}
        >
          <Text style={[styles.btnText, sourceType === 'local' && styles.btnTextActive]}>
            อ่านจาก FILE
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnMinimal, sourceType === 'remote' && styles.btnMinimalActive]}
          activeOpacity={0.8}
          onPress={loadRemoteData}
        >
          <Text style={[styles.btnText, sourceType === 'remote' && styles.btnTextActive]}>
            อ่านจาก LINK JSON
          </Text>
        </TouchableOpacity>
      </View>

      {errorMsg ? (
        <Text style={{ color: '#DC2626', marginTop: 12 }}>{errorMsg}</Text>
      ) : null}

      {loading ? (
        <ActivityIndicator color="#111827" style={{ marginTop: 40 }} />
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
          renderItem={({ item, index }) => {
            // 💡 คำนวณสีสลับตาม index ของรายการ
            const colorScheme = cardColors[index % cardColors.length];

            return (
              <TouchableOpacity
                style={[
                  styles.card,
                  {
                    backgroundColor: colorScheme.bg,
                    borderLeftWidth: 6,
                    borderLeftColor: colorScheme.border,
                  },
                ]}
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate('DetailScreen', {
                    item,
                    cardIndex: index % cardColors.length,
                  })
                }
              >
                {item.image ? (
                  <Image
                    source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                    style={styles.cardImage}
                  />
                ) : null}
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={[styles.cardCategory, { color: colorScheme.theme, fontWeight: 'bold' }]}>
                  หมวดหมู่: {item.category}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
}
