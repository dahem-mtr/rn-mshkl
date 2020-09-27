import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.squaresContent}>
                <View style={styles.row}>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                </View>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    squaresContent: {
        backgroundColor: "#ddd",
        // width: 200,
        padding: 3,
        borderRadius: 5,
    },
    row: {
      flexDirection :"row-reverse"  
    },
    square: {
        backgroundColor: "#fff",
        width: 40,
        height: 40,
        margin: 3,
        borderRadius: 5,
    }
})
