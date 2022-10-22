import { SafeAreaView, Text } from 'react-native';
import React, { useEffect } from 'react';
import LottieView from "lottie-react-native";
import MenuItem from '../components/RestaurantDetail/MenuItem';
import { useDispatch } from 'react-redux';

export default function OrderCompleted({route}) {
  const {restaurantName, totalUSD, items} = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', }} >
      <LottieView 
        style={{ height: 100, alignSelf: 'center', marginBottom: 30}} 
        source={require('../assets/animations/check-mark.json')} 
        autoPlay
        speed={0.5}
        loop={false}
        />
      <Text style={{fontWeight: 'bold', marginLeft: 10}} >Your order at {restaurantName} has been placed for {totalUSD} 🚀</Text>
      {items.map((item, index) => 
        (<MenuItem  
            key={index}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
            check={false}
            margin={10}
        />)
      )}
      <LottieView 
        style={{ height: 200, alignSelf: 'center', marginBottom: 30}} 
        source={require('../assets/animations/cooking.json')} 
        autoPlay
        speed={0.5}
        loop={false}
        />
    </SafeAreaView>
  )
}