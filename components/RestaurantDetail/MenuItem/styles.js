import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        marginRight: 40
    },
    infoContainer: {
        width: '70%',
        justifyContent: 'space-evenly'
    },
    infoTitle: {
        fontWeight: '600',
        fontSize: 20,
    }
    ,
    foodImg:  {
        width: 100,
        height: 100,
        borderRadius: 8
    },
})

export default styles