import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        fontSize: 20,
        marginRight: 60
    },

    button: {
        marginTop: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 13,
        borderRadius: 30,
        bottom: 50,
        left: 50,
        height: 50,
        width: 300,
        position: 'absolute',
        flexDirection: "row",
        justifyContent: 'flex-end'
    },

    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        position: "absolute",
        bottom: 80,
    },

    checkoutButton: {
        backgroundColor: 'black',
        borderRadius: 30,
        padding: 13,
        width: 300,
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginTop: 25
    },

    modalSubContainer: {
        backgroundColor: 'white',
        height: '60%',
        alignItems: 'center',
        borderWidth: 1
    },

    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0,0,0,0.7)'
    },

    itemsContainer: {
        // marginTop: 20
    },

    price: {
        color: '#fff'
    },
    
    restName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 25
    },

    subcontainer: {
        flexDirection: 'row',
        justifyContent: "center",
        width: '100%'
    },

    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '90%',
        marginTop: 15
    }
})

export default styles;