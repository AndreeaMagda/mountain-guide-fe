import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Gear = () => {
  return (
    <View style={styles.container}>
      <Text>Gear</Text>
    </View>
  );
};

export default Gear;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
