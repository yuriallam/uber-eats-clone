import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import styles from './styles';
import HeaderButton from '../HeaderButton';


let primary = 'black';
let secondary = 'white'

const headerTitles = [
    "Delivery",
    "Pickup"
];
const defaultHeaderTitle = headerTitles[0];

function HeaderTab(props) {
    const [active, setActive] = useState(defaultHeaderTitle)

    // active === 'Delivery' ? [ primary, secondary ] = ['black', 'white'] : [ primary, secondary ] = [ 'white', 'black',]
    
    return (
        <View style={styles.container} >
            {headerTitles.map((headerTitle) => (
                <HeaderButton
                    key={headerTitle}
                    text={headerTitle}
                    textColor={headerTitle === props.activeTab? secondary : primary}
                    buttonColor={headerTitle === props.activeTab? primary : secondary}
                    onPress={() => props.setActiveTab(headerTitle)}
                />
            ))}
            {/* <HeaderButton text='Delivery' textColor={secondary} buttonColor={primary}  onPress={() => setActive('Delivery')} />
            <HeaderButton text='Pickup'  textColor={primary} buttonColor={secondary}   onPress={() => setActive('Pickup')}  /> */}
        </View>
    );
}


export default HeaderTab;