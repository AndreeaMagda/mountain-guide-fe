import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Trail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trail Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Trail;
