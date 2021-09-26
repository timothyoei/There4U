import React, { useState } from 'react';
import { View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../screens/Home';
import Stories from '../screens/Stories';
import Help from '../screens/Help';
import Community from '../screens/Community';
import Info from '../screens/Info';

export default function Navigation() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'stories', title: 'Stories', icon: 'book-open-variant' },
      { key: 'help', title: 'Help', icon: 'plus-circle-outline'},
      { key: 'community', title: 'Community', icon: 'account' },
      { key: 'info', title: 'Info', icon: 'information-outline' }
    ]);

    const renderScreen = BottomNavigation.SceneMap({
        home: () => <Home />,
        stories: () => <Stories />,
        help: () => <Help />,
        community: () => <Community />,
        info: () => <Info />
    });

    return (
        <View style={{minWidth: '100%'}}>
            <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScreen}
            />
        </View>
    );
}