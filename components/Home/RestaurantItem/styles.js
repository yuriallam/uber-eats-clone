import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    restImg :{
        width: '100%',
        height: 180
    },
    touchable :{
        position: 'absolute',
        right: 15,
        top: 15,
    },
    restinfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    restName: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    restTime: {
        fontSize: 13,
        color: 'gray'
    },
    restRatingContainer: {
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    }
})

export default styles;