import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#FFFFFF' 
  },
  headerTitle: { 
    fontSize: 22, 
    fontWeight: '600', 
    color: '#111827', 
    marginBottom: 4,
    letterSpacing: -0.5
  },
  headerSub: { 
    fontSize: 14, 
    color: '#6B7280', 
    marginBottom: 16,
    lineHeight: 20
  },
  card: { 
    backgroundColor: '#FAFAFA', 
    borderRadius: 12, 
    padding: 16, 
    marginBottom: 16, 
    borderWidth: 1,
    borderColor: '#F3F4F6'
  },
  cardImage: { 
    width: '100%', 
    height: 160, 
    borderRadius: 8, 
    marginBottom: 12, 
    resizeMode: 'cover',
    backgroundColor: '#F3F4F6'
  },
  cardTitle: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#111827',
    marginBottom: 4
  },
  cardCategory: { 
    fontSize: 12, 
    color: '#9CA3AF', 
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontWeight: '500'
  },
  btnRow: { 
    flexDirection: 'row', 
    gap: 10, 
    marginBottom: 20 
  },
  // ปรับตรงนี้ให้โค้งมน (borderRadius: 20) และดูสมูทขึ้น
  btnMinimal: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20, 
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  btnMinimalActive: {
    backgroundColor: '#111827',
    borderColor: '#111827'
  },
  btnText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563'
  },
  btnTextActive: {
    color: '#FFFFFF'
  }
});