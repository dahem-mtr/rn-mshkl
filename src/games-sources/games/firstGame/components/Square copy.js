import React, { useState, useEffect, useRef } from "react";
import { Animated, StyleSheet, TouchableWithoutFeedback , View, Text, Image } from "react-native";

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
  // const dataloaded = true
  
  const show = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      
      // Animated.timing(fadeAnim, {
      //   toValue: 1,
      //   duration: 100,
      //   useNativeDriver: true,
      // }).start(() => {});



    });
  };


  useEffect(() => {
    show()
  }, []);
  return (
    
    <TouchableWithoutFeedback onPress={() => onPress()}>
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
          >

          </View>
        ) : null}


        {item1.true ? (
          <View style={[styles.square, styles.mask, { backgroundColor: "#fff" }]}>
            <Text style={{ fontSize: 30, color: "black" }}>✔</Text>
          </View>
        ) : null}


        {item1.error ? (
          <View style={[styles.square, styles.mask, { backgroundColor: "#fff" }]}>
            <Text style={{ fontSize: 30, color: "black" }}>✖</Text>
          </View>
        ) : null}

     </View>
    </TouchableWithoutFeedback >
  );
};
export default Square;

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
    width: SQUARE_SIZE - 20
  },
  image: {
    height: "80%",
    width: "80%",
  },
});


