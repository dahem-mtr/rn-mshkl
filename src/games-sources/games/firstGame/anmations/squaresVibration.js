import { Animated, Easing} from "react-native";

export const squaresVibration = (squaresAnimRef, callBack) => {
  Animated.timing(squaresAnimRef, {
    toValue: 20,
    duration: 60,
    useNativeDriver: true,
  }).start(() => {
    Animated.timing(squaresAnimRef, {
      toValue: -40,
      duration: 60,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(squaresAnimRef, {
        toValue: 0,
        duration: 60,
        useNativeDriver: true,
      }).start(() => {
        callBack()
      });
    });
  });
};
