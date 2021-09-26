import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Menu } from 'react-native-paper';

export default function Dropdown({ content, message }) {

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
                        {message}
                    </Button>}>
                <View> 
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