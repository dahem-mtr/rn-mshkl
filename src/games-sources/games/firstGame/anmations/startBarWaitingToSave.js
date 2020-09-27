
import { Animated, Dimensions, Easing } from "react-native";

export const startBarWaitingToSave = (barWaitAnimRef, Callback) => {
    barWaitAnimRef.setValue(0);

    Animated.timing(barWaitAnimRef, {
        toValue: -Dimensions.get('window').width,
        duration: 3000,
        useNativeDriver: true,
        // easing: Easing.bounce
        
    }).start(() => {

        Callback()
    });
};