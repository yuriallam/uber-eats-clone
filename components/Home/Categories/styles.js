import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    catImg :{
        width: 50,
        height: 40,
        resizeMode: 'contain'
    },
    catText: {
        fontWeight: '900',
        fontSize: 13
    },
    container: {
        marginTop: 5,
        paddingLeft: 20,
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    item: {
        marginRight: 30,
        alignItems: 'center',
    }
})

export default styles;