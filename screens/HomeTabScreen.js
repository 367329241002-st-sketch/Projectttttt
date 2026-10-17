import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { localTopics, fetchRemoteTopics } from '../data/Topic';
import { styles } from '../styles/ProjectStyles';

export default function HomeTabScreen({ navigation }) {
  const [data, setData] = useState(localTopics);
  const [sourceType, setSourceType] = useState('local');
  const [loading, setLoading] = useState(false);

  const loadLocalData = () => {
    setSourceType('local');
    setData(localTopics);
  };

  const loadRemoteData = async () => {
    setSourceType('remote');
    setLoading(true);
    const remoteData = await fetchRemoteTopics();
    setData(remoteData.length > 0 ? remoteData : localTopics);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>สเปกคอม & แก้ไขปัญหา</Text>
      <Text style={styles.headerSub}>
        แหล่งข้อมูล: {sourceType === 'local' ? '📁 ไฟล์ในเครื่อง' : '🌐 ลิงก์ภายนอก (.json)'}
      </Text>

      {/* ปุ่มกดสลับโหมดแบบโค้งมน Minimal */}
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

      {loading ? (
        <ActivityIndicator color="#111827" style={{ marginTop: 40 }} />
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.card}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('DetailScreen', { item })}
            >
              {item.image ? <Image source={{ uri: item.image }} style={styles.cardImage} /> : null}
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardCategory}>หมวดหมู่: {item.category}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}