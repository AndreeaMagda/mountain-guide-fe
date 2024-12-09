import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const QuickActions = () => {
  return (
    <View>
      {/* Action Buttons Row */}
      <View style={styles.container}>
        {/* Plan a Trip */}
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="map" size={30} color="#4CAF50" />
          <Text style={styles.actionText}>Plan a Trip</Text>
        </TouchableOpacity>

        {/* Explore Trails */}
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="walk" size={30} color="#2196F3" />
          <Text style={styles.actionText}>Explore Trails</Text>
        </TouchableOpacity>

        {/* Safety Tips */}
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="check-square-o" size={30} color="#FF9800" />
          <Text style={styles.actionText}>Safety Tips</Text>
        </TouchableOpacity>
      </View>

      {/* Meteo Section */}
      <View style={styles.meteoContainer}>
        <TouchableOpacity style={styles.meteoButton}>
          <FontAwesome name="cloud" size={30} color="#8cc9db" />
          <Text style={styles.meteoText}>Meteo</Text>
          <Text style={styles.meteoSubText}>Current: 20°C | Clear Sky</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  actionText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  meteoContainer: {
    padding: 20,
    alignItems: 'center',
  },
  meteoButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
    width: '100%',
  },
  meteoText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  meteoSubText: {
    marginTop: 5,
    fontSize: 12,
    color: '#777',
  },
});

export default QuickActions;
