import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'


import About from '../components/RestaurantDetail/About'
import MenuItems from '../components/RestaurantDetail/MenuItems'
import ViewCart from '../components/RestaurantDetail/ViewCart'

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View  >
      <About route={route} />
      <Divider width={1.8} style={{marginVertical: 20}} />
      <ScrollView style={{height:560}}>
        <MenuItems restaurantName={route.params.name} />
      </ScrollView>
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  )
}

export default RestaurantDetail