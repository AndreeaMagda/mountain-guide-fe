import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Guide = () => {
  return (
    <View style={styles.container}>
      <Text>Guide</Text>
    </View>
  );
};

export default Guide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
