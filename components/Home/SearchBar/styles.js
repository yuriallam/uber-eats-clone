import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        flexDirection: 'row'
    },
    searchBar: {
        textInput:{
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7
        },
        textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10
        }
    }
})

export default styles;
