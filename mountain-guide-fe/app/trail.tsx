import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Trail = () => {
  return (
    <View style={styles.container}>
      <Text>Trail</Text>
    </View>
  );
};

export default Trail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
