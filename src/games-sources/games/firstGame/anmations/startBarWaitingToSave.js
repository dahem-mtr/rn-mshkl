
import { Animated, Dimensions, Easing } from "react-native";
var device = Dimensions.get("window");
export const startBarWaitingToSave = (barWaitAnimRef, Callback) => {
    barWaitAnimRef.setValue(0);

    setTimeout(() => {
        Animated.timing(barWaitAnimRef, {
            toValue: -device.width,
            duration: 2000,
            useNativeDriver: true,
            // easing: Easing.bounce
            // Easing.linear
            
        }).start(Callback);
    }, 200);
};