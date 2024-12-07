import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Goal = () => {
  return (
    <View style={styles.container}>
      <Text>Goal</Text>
    </View>
  );
};

export default Goal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
