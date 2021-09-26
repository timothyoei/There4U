import React from 'react';
import { View } from 'react-native';
import styles from '../styles/base';
import { Button } from 'react-native-paper';
import { Call, Text } from 'react-native-openanything'

export default function Help() {
    return (
        <View style={styles.centeredContainer}>
            <Button 
                icon='message-processing'
                onPress={()=>{Text('7863745755', 'Hello from the other side')}}
            >
                Text
            </Button>
            <Button 
                icon='phone'
                onPress={()=>{Call('3863856408', true)}}
            >
                Call
            </Button>
        </View>
    );
}