import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'; 
import { strings } from "../utils/i18n";
import { theme } from "../utils/theme";

const Footer = ({ navigation, onPress}) => {
    return (
        <View style={styles.fotter}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <View style={styles.button1}>
                    {/* <MaterialCommunityIcons name="window-close" size={40} color="silver" /> */}
                    <FontAwesome name="arrow-right" size={40} color="silver" />
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.left}>
                <TouchableWithoutFeedback onPress={onPress}>
                    <View style={styles.button}>
                        <Text style={styles.text}>{strings.t('showGame.play')}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    fotter: {
        position: "absolute",
        bottom: 0,
        height: 50,
        // justifyContent: "center",
        flexDirection: "row-reverse",
        width: "100%",
        backgroundColor: "#fff",
        // borderTopWidth: 0.3,
        borderBottomColor: "#dcdcdc",

        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
    },
    button: {
        backgroundColor: "#55a630",
        paddingHorizontal: 8,
        borderRadius: 8,
        width: 60,
        padding: 4,
        justifyContent: "center",
        // marginRight:30
    },
    button1: {
        // backgroundColor: "#55a630",
        paddingHorizontal: 8,
        justifyContent: "center",
        marginHorizontal: 10,
    },
    left: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    text: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center",
        fontFamily: theme.fonts.main.ar,
    },

})
