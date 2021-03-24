import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../utils/theme'

const GameData = (height) => {
    return (
        <View style={[styles.container]}>
            {/* <Text style={styles.title}> مستواك</Text> */}
            <View style={styles.row}>
                
                <View>
                <Text style={styles.text}>نمط التدريب</Text>
                </View>
                <View>
                </View>
                <View>
                <Text style={styles.text}>المستوى الحالي - 2</Text>
                </View>
                <View>
                <Text style={styles.text}>أعلى مستوى   - ٢٠٢</Text>
                </View>
                

            </View>
        </View>
    )
}

export default GameData

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignSelf: "center",
        width: "90%",
        borderRadius: 7,
        marginTop:5,
    },title:{
        marginTop:10,
        marginLeft:2,
        alignSelf:"center",
        fontFamily: theme.fonts.main.ar
        
    }, text: {
        marginTop:10,
        marginLeft:2,
        alignSelf:"center",
        fontFamily: theme.fonts.main.ar
    },
    row: {
        // flexDirection: 'row-reverse',
        // justifyContent:"space-around",
        // flexWrap:"wrap"
    }
})
