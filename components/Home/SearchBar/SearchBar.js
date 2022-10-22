import React from 'react';
import { Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesgin from 'react-native-vector-icons/AntDesign'

import styles from './styles';


// 'AIzaSyC_KCVzTMa3tKtt9VB-wpbf0FavJsXzbdg'

function SearchBar({cityHandler}) {
    return (
        <View style={ styles.container } >
            <GooglePlacesAutocomplete  
              query={{key: 'AIzaSyBXbuVgD5wOaydEjRAvCr16638MS6oasng'}}
              onPress={(data, details = null) => {
                cityHandler(data);
              }}
              placeholder='Search'
              styles={ styles.searchBar }
              renderLeftButton = {() => (
              <View style={{ marginLeft: 10 }} >
                <Ionicons name='location-sharp' size={24} />
              </View>
              )}
              renderRightButton={() => (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 8,
                    backgroundColor: '#fff',
                    padding: 9,
                    borderRadius: 30
                }} >
                  <AntDesgin name='clockcircle' size={11} style={{marginRight: 6}} />
                  <Text>Search</Text>
                </View>
              )}
              />
         </View>
    );
}

export default SearchBar;