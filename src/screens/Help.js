import React from 'react';
import { View } from 'react-native';
import styles from '../styles/base';
import { Button, Surface } from 'react-native-paper';
import { Call, Text } from 'react-native-openanything'

export default function Help() {
    return (
        <View style={styles.centeredContainer}>
            <Surface style={{margin: '10%'}}>
                <Button 
                    icon='message-processing'
                    onPress={()=>{Text('741741', 'HOME')}}
                >
                    Text Crisis Line
                </Button>
            </Surface>
            <Surface>
                <Button 
                    icon='phone'
                    onPress={()=>{Call('18002738255', true)}}
                >
                    Call Suicide Prevention Line
                </Button>
            </Surface>
        </View>
    );
}