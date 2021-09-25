import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import Navigation from './src/components/Navigation';
import styles from './src/styles/base';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.fullContainer}>
        <View style={styles.centeredContainer}>
          <Navigation />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}