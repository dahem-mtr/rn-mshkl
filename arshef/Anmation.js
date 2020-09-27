import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

const Anmation = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  // const dataloaded = true
  var d = 1;

  const hide = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      if (d <= 1) {
        show();
      }
    });
  };
  const show = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0.7,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      d = d + 1;
      hide();
    });
  };

  
  return (
    <Animated.View
      onLayout={() => show()}
      style={[
        styles.content,
        {
          transform: [
            {
              scale: fadeAnim,
              // translateX: fadeAnim
            },
          ],
          backgroundColor: "#5ab74d",
        },
      ]}
    ></Animated.View>
  );
};

export default Anmation;

const styles = StyleSheet.create({
  content: {
    position: "absolute",
    height: 80,
    width: 80,
    left: "50%",
    top: "50%",
    marginLeft: -40,
    backgroundColor: "black",
  },
});
