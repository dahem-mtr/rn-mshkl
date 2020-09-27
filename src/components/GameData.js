import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../utils/theme'

const GameData = (height) => {
    return (
        <View style={[styles.container, height]}>
            <Text style={styles.text}>نقاطك</Text>
            <View style={styles.row}>
                <Text style={styles.text}> - </Text>
                <Text style={styles.text}> - </Text>
                <Text style={styles.text}> - </Text>

            </View>
        </View>
    )
}

export default GameData

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor: "#fff",
        alignSelf: "center",
        width: "90%",
        borderRadius: 7,
        marginTop:5
    }, text: {
        marginTop:10,
        fontFamily: theme.fonts.main.ar
    },
    row: {
        flexDirection: 'row-reverse',
        justifyContent:'space-between'
    }
})
