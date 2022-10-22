import { View, Text } from 'react-native'
import React from 'react'

import styles from './styles';

export default function OrderItem({item}) {
    const { title, price } = item
  return (
    <View style={styles.container} >
      <Text style={styles.title} >{title}</Text>
      <Text style={styles.price} >{price}</Text>
    </View>
  )
}