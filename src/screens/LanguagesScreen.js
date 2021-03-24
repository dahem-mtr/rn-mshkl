import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Languages = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>This is a Languages!</Text>
            <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => navigation.goBack()}><Text style={{ fontSize: 30, color: "#fff", textAlign: 'center' }}> back </Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'black',
        marginTop: 10,
        width: 200
    }
});

export default Languages;