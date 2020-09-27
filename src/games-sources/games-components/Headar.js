import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Headar = (props) => {
    return (
        <View style={styles.container}>
            <Animated.View
                style={{transform: [
                        {
                            translateY: props.headerAnimRef,
                        },
                    ]
                }
                
                }
            >
            <View style={styles.header}>
                    <View>
                        <Text style={styles.gameTitle}>النقاط</Text>
                        <Text style={styles.number}>{props.headerData.score}</Text>
                    </View>
                    <View>
                        <Text style={styles.gameTitle}>المستوى</Text>
                        <Text style={styles.number}>{props.headerData.level}</Text>
                    </View>

            </View>
           </Animated.View>
        </View>
    )
}

export default Headar

const styles = StyleSheet.create({
    container: {
        
        height:80,
        
    },
    header: {
        height: 80,
        paddingTop: getStatusBarHeight()+10,
        paddingHorizontal:9,
        flexDirection: "row-reverse",
justifyContent:"space-around",
        position: 'absolute',
        top: 0,
        width:"100%",
        backgroundColor: "#fff",
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,

    }, gameTitle: {
        alignSelf: "center",
        fontFamily: 'DroidKufi-Bold',
        color: "#7366ff"
    }, number: {
        alignSelf: "center",
        fontFamily: 'DroidKufi-Bold',
        // color: "#7366ff"
    }
})
