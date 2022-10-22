import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import MenuItem from '../MenuItem/MenuItem'


const foods = [
    {
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://t3.ftcdn.net/jpg/01/00/52/14/360_F_100521407_15ViliDWGLkB1N6Lwh5DQg9MePJa5tbw.jpg'
    },
    {
        title: 'Tandoori chicken ',
        description: 'Amazing indian dish with tenderloin chicken off the size ',
        price: '$19.20',
        image: 'https://healthyrecipesblogs.com/wp-content/uploads/2013/02/tandoori-chicken-featured-2021.jpg'
    },
    {
        title: 'Chilaquiles',
        description: 'Chilaquiles with cheese and sauce. A delicious mexican dish',
        price: '$21.50',
        image: 'https://masonfit.com/wp-content/uploads/2019/05/quick-and-easy-healthy-chilaquiles-recipe-scaled.jpg'
    },
    {
        title: 'Chilaquiles',
        description: 'Chilaquiles with cheese and sauce. A delicious mexican dish',
        price: '$21.50',
        image: 'https://masonfit.com/wp-content/uploads/2019/05/quick-and-easy-healthy-chilaquiles-recipe-scaled.jpg'
    },
    {
        title: 'Chilaquiles',
        description: 'Chilaquiles with cheese and sauce. A delicious mexican dish',
        price: '$21.50',
        image: 'https://masonfit.com/wp-content/uploads/2019/05/quick-and-easy-healthy-chilaquiles-recipe-scaled.jpg'
    },
    {
        title: 'Chilaquiles',
        description: 'Chilaquiles with cheese and sauce. A delicious mexican dish',
        price: '$21.50',
        image: 'https://masonfit.com/wp-content/uploads/2019/05/quick-and-easy-healthy-chilaquiles-recipe-scaled.jpg'
    },
    {
        title: 'Chilaquiles',
        description: 'Chilaquiles with cheese and sauce. A delicious mexican dish',
        price: '$21.50',
        image: 'https://masonfit.com/wp-content/uploads/2019/05/quick-and-easy-healthy-chilaquiles-recipe-scaled.jpg'
    },
    {
        title: 'Chilaquiles',
        description: 'Chilaquiles with cheese and sauce. A delicious mexican dish',
        price: '$21.50',
        image: 'https://masonfit.com/wp-content/uploads/2019/05/quick-and-easy-healthy-chilaquiles-recipe-scaled.jpg'
    },
]


export default function MenuItems({restaurantName}) {

    const dispatch =  useDispatch();

    const cartItems = useSelector( (state) => state.cartReducer.selectedItems.items );

    const isFoodInCart = (food, cartItems) => Boolean(cartItems.find( item => item.title === food.title ))
    
    const selectItem = (item, checkboxValue) => dispatch({
        type: 'MODIFY_CART', 
        payload: {...item, restaurantName: restaurantName, checkboxValue: checkboxValue} 
    })

    return (
             foods.map((food, index) => (
                <MenuItem 
                    key={index}
                    image={food.image}
                    title={food.title}
                    price={food.price}
                    description={food.description}
                    food={food}
                    selectItem={selectItem}
                    isFoodInCart={isFoodInCart}
                    cartItems={cartItems}
                    check={true}
                /> 
                ))
    )
}