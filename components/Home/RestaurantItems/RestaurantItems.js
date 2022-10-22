import { View, Text } from 'react-native'
import React from 'react'

import RestaurantItem from '../RestaurantItem/RestaurantItem';



const RestaurantItems = ({data, navigation}) => {
  return (
    data.map((rest,index) => (
        <RestaurantItem image={rest.image_url} rating={rest.rating} name={rest.name}  
          key={index} navigation={navigation} price={rest.price} reviews={rest.review_count} categories={rest.categories}  />
    ))
  )
}

export default RestaurantItems