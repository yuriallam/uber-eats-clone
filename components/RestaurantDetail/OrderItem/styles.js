import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '95%',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        marginBottom: 10,
        paddingHorizontal:20
    },
    price: {
        opacity: 0.7,
        fontSize: 14
    },
    title: {
        fontWeight: '600',
        fontSize: 16
    }
})

export default styles;