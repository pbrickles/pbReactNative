import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default () => (
  <View style={styles.container}>
    <Text>Profile</Text>
  </View>
);
