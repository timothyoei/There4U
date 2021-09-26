import React from 'react';
import { WebView } from 'react-native-webview';
import Dropdown from '../components/Dropdown';
import { View } from 'react-native';
import mhMap from '../../illnesses.json';

const mhList = [
                'Anger', 
                'Anxiety', 
                'Bipolar Disorder', 
                'Depression', 
                'Body dysmorphic disorder', 
                'Dissociation and dissociative disorders', 
                'Drugs', 
                'Eating problems', 
                'Hearing Voices', 
                'Hoarding', 
                'Hypomania and mania', 
                'Loneliness', 
                'Obsessive-Compulsive Disorder', 
                'Anxiety and panic attacks', 
                'Paranoia', 
                'Personality disorders', 
                'Phobias', 
                'Postnatal and Perinatal mental health', 
                'Post-traumatic stress disorder', 
                'Premenstrual Disphoric Disorder', 
                'Psychosis', 
                'Schizoaffective disorder', 
                'Schizophrenia', 
                'Seasonal affective disorder (SAD)', 
                'Self esteem', 
                'Self harm', 
                'Sleep problems', 
                'Stress', 
                'Suicidal Feelings', 
                'Trauma', 
                'Tardive dyskinesia (TD)'
            ]
            
export default function Info() {
    return (
        <>
            <Dropdown content={mhList} message={'Choose your mental health'} />
            <WebView source={{ uri: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/anger/'}}/>
        </>
    );
}