import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


import styles from './styles'

const BottomTabs = () => {
  return (
    <View style={styles.container} >
      <Icon icon='home' text='Home' />
      <Icon icon='search' text='Browse' />
      <Icon icon='shopping-bag' text='Grocery' />
      <Icon icon='receipt' text='Orders' />
      <Icon icon='user' text='Account' />
    </View>
  )
}

export default BottomTabs;


const Icon = (props) => (
    <TouchableOpacity>
        <View style={{alignItems: 'center'}} >
            <FontAwesome5 
            name={props.icon}
            size={25}
            style={styles.icon}
            />
            <Text>{props.text}</Text>
        </View>
        </TouchableOpacity>
)
