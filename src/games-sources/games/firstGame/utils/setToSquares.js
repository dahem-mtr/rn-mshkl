import React from "react";

import { StyleSheet, Image } from "react-native";
export const setToSquares = (props) => {
  const { countSquares, componentsInKeys, mixedImages, updateItems } = props;

  var items = [];
  var counter = 0;
  for (var i = 0; i < countSquares; i++) {
    if (componentsInKeys.includes(i)) {
      items = [
        ...items,

        {
          key: i,
          show: true,
          // isCorrect: false,
          component: (
            <Image fadeDuration={0} style={styles.image} source={mixedImages[counter]} />
          ),
        },
      ];

      counter++;
    } else {
      items = [
        ...items,

        {
          key: i,
          show: true,
          // isCorrect: false,
          component: null,
        },
      ];
    }
  }

  updateItems([...items]);
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    // tintColor: "#2d3436"
  },
});
