import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/base';
import { Button } from 'react-native-paper';

export default function Help() {
    return (
        <View style={styles.centeredContainer}>
            <Button 
                icon='message-processing'
                onPress={()=>{}}
            >
                Text
            </Button>
            <Button 
                icon='phone'
                onPress={()=>{}}
            >
                Call
            </Button>
        </View>
    );
}