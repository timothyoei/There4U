import { View, Text } from 'react-native';
import React from 'react';
import styles from '../styles/base';
import { WebView } from 'react-native-webview';

export default function Info() {
    return (
        <WebView source={{ uri: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/anger/'}}/>
    );
}