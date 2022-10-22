import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import { useSelector } from 'react-redux'
// import firestore from '@react-native-firebase/firestore';

// import firebase from '../../../firebase';
import OrderItem from '../OrderItem'

export default function ViewCart({navigation}) {
  const [ modalVisible, setModalVisible ] = useState(false)

  const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)

  const total = items
  .map(item => Number(item.price.replace('$','')))
  .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD'
  });

  const addOrderToFireBase = () =>{
    setModalVisible(false);
    navigation.navigate('OrderCompleted',{restaurantName: restaurantName, totalUSD: totalUSD, items: items})
  }

  // const addOrderToFireBase = () => {
  //   const db = app.firestore();
  //   db.collection('orders').add({
  //     items: items,
  //     restaurantName: restaurantName,
  //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //   })
  //   setModalVisible(false);
  // }

  const checkoutModalContent = () =>{
    return(
      <View style={styles.modalContainer} >
        <View style={styles.modalSubContainer}>
          <Text style={styles.restName} >{restaurantName}</Text>
          {items.map((rest, index) => (
            <OrderItem item={rest} key={index} />
          ))}
          <View style={styles.subtotalContainer} >
            <Text>Subtotal</Text>
            <Text>{totalUSD}</Text>
          </View>
          <TouchableOpacity onPress={ addOrderToFireBase} style={styles.checkoutButton} >
            <Text style={{color: '#fff', fontSize: 18, marginRight: 60}} >Checkout</Text>
            <Text style={{color: '#fff', fontSize: 13, marginTop: 5}} >{totalUSD}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  };

  console.log(total);

  return (
    <>
      <Modal 
        animationType='slide' 
        visible={modalVisible} 
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        >
          {checkoutModalContent()}
        </Modal>
      { total ? (
      // <View style={styles.container}>
      //   <View style={styles.subcontainer} >
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)} >
              <Text style={styles.buttonText} >ViewCart</Text>
              <Text style={styles.price} >{totalUSD}</Text>
          </TouchableOpacity>
      //   </View>
      // </View>
      ): ( <></> )}
    </>
  )
}