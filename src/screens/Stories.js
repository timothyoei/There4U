import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles/base';
import Dropdown from '../components/Dropdown';
import Story from '../components/Story';

const sampleDropdownOptions = ["Item 1", "Item 2", "Item 3"];
const sampleStory = {
    text: 'I cry myself to sleep every night...WAHAHAHAAHAHAHAHAAHAHAHAHAHAAHAHAHAHAHAHAHAHA',
    numLikes: 5000,
    postedAgo: "5d"
};

export default function Stories() {

    return (
        <ScrollView contentContainerStyle={styles.fullContainer}>
            <View style={styles.topContainer}>
                <Dropdown content={sampleDropdownOptions}/>
                {/* TODO: iterate through stories json */}
                <Story post={sampleStory} />
                <Story post={sampleStory} />
            </View>
        </ScrollView>
    );
}