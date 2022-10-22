import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

function HeaderButton({ text, buttonColor, textColor, onPress }) {
    return (
        <TouchableOpacity  onPress={onPress}  style={[ styles.button, {backgroundColor: buttonColor} ]} >
            <Text style={[ styles.textbutton, {color: textColor} ]} >{text}</Text>
        </TouchableOpacity>
    );
}

export default HeaderButton;