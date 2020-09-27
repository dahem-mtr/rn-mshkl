import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

const SquaresContainer = (props) => {
    return (
        <Animated.View
            style={{
                transform: [
                    {
                        translateX: props.squaresAnimRef,
                    },
                ],
                width: 4 * 80,
                alignSelf: "center",
            }}
        >
            {props.children}
        </Animated.View>
    );
};

export default SquaresContainer;
