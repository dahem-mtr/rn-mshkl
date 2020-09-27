
import { Animated } from "react-native";

export const moveSquaresToLeft = (squaresAnimRef, Callback) => {
    Animated.timing(squaresAnimRef, {
        toValue: -400,
        duration: 300,
        useNativeDriver: true,
    }).start(() => {
        squaresAnimRef.setValue(0);
        Callback()
    });
};