import React, { useEffect, useState,useRef } from 'react'
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
const ResultGame = (props) => {

    const [show, setShow] = useState(false);

    const animRef = useRef(new Animated.Value(0)).current;
    const starsAnimRef = useRef(new Animated.Value(200)).current;
    const starsScaleAnimRef = useRef(new Animated.Value(1.4)).current;
    const stars = 2;


    useEffect(() => {
        if (props.gameIsEnd) {
            Animated.timing(animRef, {
                toValue: -Dimensions.get("window").height,
                duration: 600,
                useNativeDriver: true,

            }).start(() => {
                setTimeout(() => {
                Animated.timing(starsAnimRef, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
    
                }).start(() => {});

                Animated.timing(starsScaleAnimRef, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
    
                }).start(() => {
    
                    setShow(true)
                }); 

                
                    
                }, 500);



            });
        }

    }, [props.gameIsEnd])

    const renderItems = () => {



        return [0, 0, 0].map((item, i) => {
            return (
                <AntDesign key={i} name="star" size={60} color={i < stars ? "#fabe19" : "#ddd"} />
            );
        });
    };
    return (
        <Animated.View
            style={[styles.container, {
                transform: [
                    {
                        translateY: animRef,
                    },
                ]
            }
            ]}
        >



            <Animated.View
                style={[styles.iconsContent, {
                    transform: [
                        {
                            // translateY: starsAnimRef,
                            scale:starsScaleAnimRef
                        },
                        {
                            translateY: starsAnimRef,
                            // scale:starsScaleAnimRef
                        },
                    ]
                }
                ]}
            >
                {renderItems()}
            </Animated.View>
            { show?
            <View>

                <View style={{ marginTop: 40, flexDirection: "row-reverse", justifyContent: "space-around" }}>
                <View>
                    <Text style={styles.textTilte}>
                        المستوى
                        </Text>
                    <Text style={styles.number}>
                        {props.headerProps.level}
                    </Text>
                </View>
                <View>
                    <Text style={styles.textTilte}>
                        النقاط
                         </Text>
                    <Text style={styles.number}>
                        {props.headerProps.score}
                    </Text>
                </View>

                

            </View> 
                <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
                <Text style={styles.back}>
                    back
          </Text>
            </TouchableWithoutFeedback>
            </View>
            : null}
            
        </Animated.View>
    )
}

export default ResultGame

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        opacity: 1,
        top: Dimensions.get("window").height,
        borderTopStartRadius: 10,
        borderTopEndRadius: 8,
        position: "absolute",
        backgroundColor: '#fff',
        // justifyContent: "center",
        // alignItems: "center"
    }, back: {
        fontSize: 20,
        alignSelf: "center",
        marginTop: 200
    }, textTilte: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily: 'DroidKufi-Bold'

    },
    number: {
        fontSize: 18,
        alignSelf: "center",
        fontWeight: "bold",

    },
    iconsContent: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 10,
        marginTop: 40
    }
})
