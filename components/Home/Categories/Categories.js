import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './styles'

const items = [
    {
        image: require('../../../assets/images/shopping-bag.png'),
        text:  'Pick-up',
    },
    {
        image: require('../../../assets/images/soft-drink.png'),
        text:  'Soft Drinks',
    },
    {
        image: require("../../../assets/images/bread.png"),
        text:  'Bakery Items',
    },
    {
        image: require('../../../assets/images/fast-food.png'),
        text:  'Fast Food',
    },
    {
        image: require('../../../assets/images/coffee.png'),
        text:  'Coffee & Tea',
    },
    {
        image: require('../../../assets/images/desserts.png'),
        text:  'Desserts',
    },
]


export default function Categories() {
  return (
    <View style={styles.container} >
        <ScrollView  horizontal showsHorizontalScrollIndicator={false} >
            {items.map((item) => (
                <TouchableOpacity key={item.image}>
                    <View style={styles.item} key={item.text} >
                        <Image source={item.image}  style={styles.catImg} />
                        <Text style={styles.catText} >{item.text}</Text>
                    </View>
                </TouchableOpacity>
    ))
    }
        </ScrollView>
    </View>
  )
}