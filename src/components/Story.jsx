import React from 'react';
import { View } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';
import styles from '../styles/base.js';

export default function Story({ post }) {
    return (
        <Card style={styles.cardStyles}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', maxHeight: '45%'}}>
                <Text style={{width: '85%', overflow: 'hidden'}}>{post['text']}</Text>
                <IconButton 
                    icon='arrow-right-thick' 
                    onPress={() => {}}/>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                <IconButton 
                    icon='heart'
                    onPress={() => {}}
                />
                <Text style={{paddingRight: 10}}>{post['numLikes']}</Text>
                {checkPhone(post['phoneNumber'])}
                <Text>{post['postedAgo']}</Text>
            </View>
        </Card>
    );
}

function checkPhone(phoneNumber) {
    if (phoneNumber !== '') {
        return (
            <>
                <IconButton
                    icon='cellphone'
                    onPress={() => {}}
                />
                <Text style={{paddingRight: 10}}>{phoneNumber}</Text>
            </>
        );
    }
    return <></>
}