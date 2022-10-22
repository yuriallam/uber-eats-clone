import { View, Text, Image, TurboModuleRegistry } from 'react-native'
import React from 'react'
import styles from './styles'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'



export default function MenuItem({ image, title, description, price, food, selectItem, isFoodInCart, cartItems, check, margin }) {
  return (
    <>
        <View style={[styles.container, {marginRight: margin}]} >
           {check && <BouncyCheckbox  
                iconStyle={{ borderColor: 'lightgray', borderRadius: '0' }}
                fillColor='green'  
                onPress={(checkboxValue) =>  selectItem(food, checkboxValue)}
                style={{zIndex: 999}}
                isChecked={isFoodInCart( food, cartItems )}
                />}

            <FoodInfo title={title} description={description} price={price}  />
            <FoodImage image={image} />
        </View>
            <Divider width={.8}   />
    </>
  )
};


const FoodInfo = (props) => (
    <View style={styles.infoContainer} >
        <Text style={styles.infoTitle} >{props.title}</Text>
        <Text>{props.description}</Text>
        <Text>{props.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <Image source={{uri : props.image}} style={styles.foodImg}  /> 
)