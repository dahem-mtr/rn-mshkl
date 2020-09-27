
import { Animated } from "react-native";

export const startBarWaitingToSave = (barWaitAnimRef, Callback) => {
    barWaitAnimRef.setValue(100);

    Animated.timing(barWaitAnimRef, {
        toValue: 0,
        duration: 5000,
        useNativeDriver: false,
        
    }).start(() => {

        Callback()
    });
};