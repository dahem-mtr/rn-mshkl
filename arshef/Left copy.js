import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, View, Text, Animated } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
const Left = ({ navigation, app }) => {
    const [dataloaded, setA] = useState(true);
    const Top = () => {
        return (
            <View style={{ flexDirection: app.isRTL ? 'row-reverse' : 'row', justifyContent: 'space-around' }}>
                <Feather style={styles.icon} onPress={() => onPress()} name="settings" size={35} color="#545F62" />
                <Foundation style={styles.icon} name="lightbulb" size={35} color="#ffc800" />
            </View>
        );
    }

    const fadeAnim = useRef(new Animated.Value(0)).current;
    // const dataloaded = true

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 200,
            duration: 200,
            useNativeDriver: false
        }).start(() => {
            if (dataloaded) {
                fadeOut();
            }
        }
        );
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 30,
            duration: 400,
            useNativeDriver: false


        }).start(() => {
            if (dataloaded) {
                fadeIn();
            }
        });
    };

    useEffect(() => {

        fadeOut()

        setTimeout(() => {
            setA(true);

        }, 5000);

    }, []);
    const onPress = () => {
        // sound1.replayAsync()


        navigation.navigate('Settings')
    }
    return (
        <View style={{ flex: 1 }} >
            {Top()}
            <View style={{ marginTop: 10, alignItems: 'center' }}>
                <Text style={styles.typeText}>{app.isRTL ? "حفظ" : "game to save"}</Text>
                <View style={[styles.circl, { backgroundColor: "#29ABE2", }]}></View>
                <Text style={styles.typeText}>{app.isRTL ? "تركيز" : "game to fucs"}</Text>
                <View style={[styles.circl, { backgroundColor: "#5ab74d", }]}></View>


                <View style={[styles.circl, { backgroundColor: "#fff", }]}></View>



                <Animated.View
                    style={[styles.circl1, {
                        marginTop: fadeAnim,
                        // width: fadeAnim,
                        backgroundColor: "#5ab74d",
                    }]}
                >

                </Animated.View>




            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    typeText: {
        color: "#29ABE2",
        fontFamily: 'DroidKufi-Bold',
        fontSize: 14,
        textAlign: 'center',
        // marginRight: -10
    }, circl: {
        height: 35,
        width: 35,
        margin: 10,
        borderRadius: 35 / 2,
        justifyContent: "center",
        elevation: 2,
        shadowColor: "#29ABE2",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.3,
        alignSelf: 'center'
    }
    , circl1: {
        height: 35,
        width: 35,
        margin: 10,
        borderRadius: 35 / 2,
        justifyContent: "center",
        elevation: 2,
        shadowColor: "#29ABE2",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.3,
        alignSelf: 'center'
    }
    , icon: {

        marginTop: 10,

    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "powderblue"
    },
    fadingText: {

        fontSize: 28,
        textAlign: "center",
        margin: 10
    },
})


export default Left
//     < Animated.View
// style = {
//     [styles.circl1, {
//         transform: [{
//             translateY: fadeAnim,
//             // translateX: fadeAnim
//         }],
//         backgroundColor: "#5ab74d",
//     }]}
//     >