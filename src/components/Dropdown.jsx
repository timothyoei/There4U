import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Menu, Divider } from 'react-native-paper';

export default function Dropdown({ content }) {

    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    // TODO: add arrow icon to indicate dropdown
    // TODO: center dropdown
    return (
        <View>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <Button 
                        onPress={openMenu}>
                        I need encouragement with...
                    </Button>}>
                <View style={{
                    flexDirection: 'column'
                }}>
                    {content.map(
                        (itemName) => <Menu.Item 
                                        onPress={() => {}}
                                        title={itemName}
                                        key={itemName}/>
                    )}
                </View>
            </Menu>
        </View>
    );
}