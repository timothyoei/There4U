import React from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import Navigation from './src/components/Navigation';
import styles from './src/styles/base';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.centeredContainer}>
        <Navigation />
      </View>
    </PaperProvider>
  );
}