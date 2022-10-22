import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './styles';



const About = (props) => {

  const { name, image, price, reviews, rating, categories} = props.route.params;
  
  const formatterCategories = categories.map((cat) => cat.title).join(' • ');
  
  const description = `${formatterCategories} ${price ? '• ' + price : ''} • 🎫 • ${rating} ⭐️ ${reviews} `

  return (
    <View>
        <RestaurantImage image={image} />
        <RestaurantTitle title={name} />
        <RestaurantDescription description={description}  />
    </View>
  )
}

export default About;


const RestaurantImage = (props) => (
    <Image source={{uri: props.image}}
      style={styles.restImg}    />
);

const RestaurantTitle = (props) => (
    <Text style={styles.restTitle} >{props.title}</Text>
);

const RestaurantDescription = (props) => (
    <Text style={styles.restDesc}  >{props.description}</Text>
)