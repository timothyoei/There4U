import { View, Text } from 'react-native';
import React from 'react';
import styles from '../styles/base';

export default function Home() {
    return (
        <View style={styles.centeredContainer}>
            <Text>Hello from Home!</Text>
        </View>
    );
}