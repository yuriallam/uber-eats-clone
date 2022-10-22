import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

const RestaurantItem = ({ navigation, ...props}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('RestaurantDetail', {
        name: props.name,
        image: props.image,
        price: props.price,
        reviews: props.reviews,
        rating: props.rating,
        categories: props.categories,
    })}  >
        <View style={{backgroundColor: 'white', padding: 15, marginVertical: 10}} >
            <RestaurantImage image={props.image} />
            <RestaurantInfo rating={props.rating} name={props.name} />
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantItem;


const RestaurantImage = ({image}) => (
    <>
        <Image source={{
            uri : image
        }} 
        style={styles.restImg}
        />
        <TouchableOpacity style={styles.touchable} >
            <MaterialCommunityIcons name='heart-outline' size={25} color='white'/>
        </TouchableOpacity>
    </>
)

const RestaurantInfo = ({ rating, name}) => (
    <View style={styles.restinfoContainer} >
        <View>
            <Text style={styles.restName} >{name}</Text>
            <Text style={styles.restTime} >30-45 • min</Text>
        </View>
        <View style={styles.restRatingContainer}>
            <Text>{rating}</Text>
        </View>
    </View>
)