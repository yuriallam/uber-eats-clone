import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';




import BottomTabs from '../components/Home/BottomTabs';
import Categories from '../components/Home/Categories';
import HeaderTab from '../components/Home/HeaderTab';
import RestaurantItems from '../components/Home/RestaurantItems';
import SearchBar from '../components/Home/SearchBar';

const YELP_API_KEY =  YOUR-API-KEY

function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState([])
    const [ activeTab, setActiveTab ] = useState('Delivery')
    const [ location, setLocation ] = useState('LosAngeles');

    const getRestaurantsFromYelp = () => {
        const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}&limit=50`
        
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY} `
            }
        }
          fetch(yelpurl, apiOptions)
            .then((res) => res.json())
            .then(json => {
                setRestaurantData(json.businesses.filter((rest) => 
                    rest.transactions.includes(activeTab.toLowerCase()))
                )
            })
            .catch((err) => {
                // setIsLoading(false);
                console.log(err);
          })
        
    };

    const cityHandler = (data) => {
        const city = data.description.split(',')[0].replace(/ /g,'');
        setLocation(city);
    }

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [location, activeTab])

    return (
        <SafeAreaView  style={styles.safe}>
            <View style={styles.header} >
              <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
              <SearchBar cityHandler={cityHandler} />
            </View>
                <Categories/>
            <ScrollView  >
                <RestaurantItems data={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        padding: 15
    },
    safe: {
        backgroundColor: '#eee',
        flex: 1
    }
})

export default Home;