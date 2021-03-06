import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeComp from './comps/Home.comp';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Expo Experiment. </Text>
      <StatusBar style="auto" />
      <HomeComp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
