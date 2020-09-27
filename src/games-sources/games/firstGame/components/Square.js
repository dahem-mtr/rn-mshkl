import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import imageTrue from "../../../games-assets/result-answers/circle-true.png";
import imageFalse from "../../../games-assets/result-answers/circle-false.png";

var SQUARE_SIZE = 70;
const Square = ({ item, onPressSquare, enablePress }) => {
  const [item1, setItem] = useState(item);
  useEffect(() => {
    setItem(item);
  }, [item]);

  const onPress = () => {
    if (enablePress) {
      setItem({ ...item1, show: true });

      onPressSquare(item1);
    }
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const show = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    show();
  }, []);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <View style={[styles.square, { backgroundColor: "#373f83" }]}>
          <Animated.View
            // onLayout={() => show()}
            style={[
              styles.content,
              {
                transform: [
                  {
                    scale: fadeAnim,
                    // translateX: fadeAnim
                  },
                ],
              },
            ]}
          >
            <View style={styles.component}>{item1.component}</View>
          </Animated.View>
        </View>

        {!item1.show ? (
          <View
            style={[styles.square, styles.mask, { backgroundColor: "#331c6e" }]}
          ></View>
        ) : null}

        {item1.isCorrect === "CORRECT" ? (
          <View style={[styles.square, styles.mask]}>
            <Image fadeDuration={0} style={styles.image} source={imageTrue} />
          </View>
        ) : null}

        {item1.isCorrect  === "NO_CORRECT"  ? (
          <View style={[styles.square, styles.mask]}>
            <Image fadeDuration={0} style={styles.image} source={imageFalse} />
          </View>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};
export default React.memo(Square);

const styles = StyleSheet.create({
  square: {
    alignItems: "center",
    justifyContent: "center",
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    margin: 3,
    borderRadius: 5,
  },
  mask: {
    position: "absolute",
    // backgroundColor: '#84a59d',
  },
  component: {
    height: SQUARE_SIZE - 20,
    width: SQUARE_SIZE - 20,
  },
  image: {
    height: "90%",
    width: "90%",
  },
});
