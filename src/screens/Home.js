import { View, Text } from 'react-native';
import React from 'react';
import styles from '../styles/base';
import { Button } from 'react-native-paper';

export default function Home() {
    return (
        <View>
            <Text
            style={styles.title}>
                Here4U
            </Text>
            <Button
            mode="contained"
            style={styles.fixToText}
            labelStyle={styles.buttonText}
            color="#b3f2d2"
            icon="book-open-variant"
            onPress={() => console.log('Pressed')}>
                {"Stories"}
            </Button>
            <Button
            mode="contained"
            style={styles.fixToText}
            labelStyle={styles.buttonText}
            color="#b4e0f0"
            icon="plus-circle-outline"
            onPress={() => console.log('Pressed')}>
                Help
            </Button>
            <Button
            mode="contained"
            style={styles.fixToText}
            labelStyle={styles.buttonText}
            color="#99aef2"
            icon="account"
            onPress={() => console.log('Pressed')}>
                Community
            </Button>
            <Button
            mode="contained"
            style={styles.fixToText}
            labelStyle={styles.buttonText}
            color="#887de8"
            icon="information-outline"
            onPress={() => console.log('Pressed')}>
                Info
            </Button>
        </View>
    );
}
