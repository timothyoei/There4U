import React, { useState } from 'react';
import { View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../screens/Home';
import Stories from '../screens/Stories';
import Help from '../screens/Help';
import Community from '../screens/Community';
import Info from '../screens/Info';

export default function Navigation() {
    return (
        <View>
            <MyComponent />
        </View>
    );
}

const MyComponent = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'home', title: 'Home', icon: 'camera' },
      { key: 'stories', title: 'Stories', icon: 'album' },
      { key: 'help', title: 'Help', icon: 'camera' },
      { key: 'community', title: 'Community', icon: 'history' },
      { key: 'info', title: 'Info', icon: 'camera' }
    ]);
  
    const renderScreen = BottomNavigation.SceneMap({
      home: () => <Home />,
      stories: () => <Stories />,
      help: () => <Help />,
      community: () => <Community />,
      info: () => <Info />
    });
  
    return (
        <View style={{
            flex: 1,
            minWidth: '100%'
        }}>
            <Icon name="rocket" size={30} color="#900" />;
            <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            
            renderScene={renderScreen}
            />
        </View>
    );
};