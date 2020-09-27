import React from "react";
import { StyleSheet, Animated, View } from "react-native";

const BarWait = (props) => {
  const width = props.barAnimRef.interpolate({
    inputRange: [0, 600],
    outputRange: ["0%", "600%"],
    extrapolate: "clamp",
  });

  return (
    <View style={{ width: "100%" }}>
      <Animated.View
        style={{
          height: props.height, borderRadius: 3, transform: [
            {
              translateX: props.barAnimRef,
            },
          ], backgroundColor: props.color }}
      ></Animated.View>
    </View>
  );
};

export default BarWait;

