import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TeamworkScreen() {
  const teamMembers = [
    { name: 'กันตพงศ์ พูลสวัสดิ์', role: 'Developer & UI/UX Designer', studentId: '002' },
    { name: 'อานุภาพ เรือนใจมั่น', role: 'กินข้าว', studentId: '020' },
    { name: 'เสฏฐวุฒิ ปานฑสูตร', role: 'เตะบอล', studentId: '021' },
    { name: 'ปฏิพล ท้วมพงษ์', role: 'System Tester & Documentation', studentId: '022' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.headerTitle}>👥 สมาชิกผู้จัดทำโปรเจกต์ (DATA 1)</Text>
      <Text style={styles.headerSub}>ทีมผู้พัฒนา - Smart Content Hub</Text>

      {teamMembers.map((member, idx) => (
        <View key={idx} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.memberName}>{member.name}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>รหัส {member.studentId}</Text>
            </View>
          </View>
          <Text style={styles.memberRole}>หน้าที่: {member.role}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#FFFFFF' 
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: '600', 
    color: '#111827', 
    marginBottom: 4 
  },
  headerSub: { 
    fontSize: 13, 
    color: '#6B7280', 
    marginBottom: 20 
  },
  card: { 
    backgroundColor: '#FAFAFA', 
    borderRadius: 12, 
    padding: 16, 
    marginBottom: 12, 
    borderWidth: 1, 
    borderColor: '#F3F4F6' 
  },
  cardHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 6
  },
  memberName: { 
    fontSize: 15, 
    fontWeight: '600', 
    color: '#111827' 
  },
  badge: { 
    backgroundColor: '#111827', 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    borderRadius: 12 
  },
  badgeText: { 
    fontSize: 11, 
    fontWeight: '600', 
    color: '#FFFFFF' 
  },
  memberRole: { 
    fontSize: 13, 
    color: '#4B5563' 
  }
});