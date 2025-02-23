import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const QuickActions = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.action}
        onPress={() => router.push('/trail')}
      >
        <View style={[styles.iconBox, { backgroundColor: '#FF8C00' }]}>
          <Ionicons name="map" size={24} color="white" />
        </View>
        <Text style={styles.actionText}>Plan Trip</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.action}>
        <View style={[styles.iconBox, { backgroundColor: '#4CAF50' }]}>
          <Ionicons name="compass" size={24} color="white" />
        </View>
        <Text style={styles.actionText}>Explore Trails</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.action}>
        <View style={[styles.iconBox, { backgroundColor: '#2196F3' }]}>
          <Ionicons name="shield-checkmark" size={24} color="white" />
        </View>
        <Text style={styles.actionText}>Safety Tips</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  action: {
    alignItems: 'center',
    flex: 1,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
});

export default QuickActions;
