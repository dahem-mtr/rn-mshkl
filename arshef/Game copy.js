import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import Square from "./components/Square";
import SquaresContainer from "./containers/SquaresContainer";
import ComponentRequired from "./components/ComponentRequired";
import BarWait from "./components/BarWait";

import images from "./images";


import { utils } from "../games-utils";
import { utils as thisGameUtils } from "./utils";

import { anmations } from "./anmations";
import { theme } from "../../utils/theme";

const index = ({ sounds, gameProps }) => {
  const [textTopSquares, setTextTopSquares] = useState(false);
  const [enablePress, setEnablePress] = useState(false);
  const [listenIfSquaresFinished, setListenIfSquaresFinished] = useState(false);
  const [showComponentRequired, setShowComponentRequired] = useState(false);

  const [componentRequiredIndex, setComponentRequiredIndex] = useState(null);

  const [items, updateItems] = useState([]);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const barWaitAnim = useRef(new Animated.Value(0)).current;

  const start = () => {
    var countSquares = gameProps.countSquares,
      countImages = gameProps.countImages,
      indexes = utils.createIndexes(countSquares),
      // array => [0,1,2,3,...to countSquares]
      MixedIndexes = utils.shuffleArray(indexes),
      //  shuffle array indexes  to =>  [3,1,0,2]
      componentsInIndexes = MixedIndexes.slice(0, countImages),
      // get the first 3 indexes from array MixedIndexes =>  [3,1,0]
      MixedImages = utils.shuffleArray(images);
    // images => [image1,image2,image3,image4,...]
    // MixedImages => [image2,image4,image1,image3,...]

    setComponentRequiredIndex(componentsInIndexes[0]);
    setListenIfSquaresFinished(true);
    thisGameUtils.setToSquares({
      countSquares,
      componentsInIndexes,
      MixedImages,
      updateItems,
    });
  };

  const next = () => {
    setShowComponentRequired(false);

    anmations.moveSquaresToLeft(fadeAnim, () => {
      // Callback after anmations ends

      updateItems([]);
      setTimeout(() => {
        start();
      }, 200);
    });
  };

  const onPressSquare = (itemPressed) => {
    setEnablePress(false);

    thisGameUtils.checkAnswer({
      updateItems,
      componentRequiredIndex,
      sounds,
      next,
      itemPressed,
    });
  };

  useEffect(() => {
    if (listenIfSquaresFinished) {
      // after  render squares
      setListenIfSquaresFinished(false);
      anmations.startBarWaitingToSave(barWaitAnim, () => {
        // Callback after Waiting anmations ends

        thisGameUtils.closeSquares(updateItems);
        setTextTopSquares("");
        setShowComponentRequired(true);
        setEnablePress(true);
      });
    }
  }, [listenIfSquaresFinished]);

  useEffect(() => {
    // start();

    setTimeout(() => {
      setTextTopSquares("أحفظ اماكن الصور");
      start();
    }, 1000);
  }, []);

  const renderSquares = () => {
    return items.map(function (item, i) {
      return (
        <Square
          onPressSquare={onPressSquare}
          key={i}
          item={item}
          enablePress={enablePress}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <ComponentRequired
        items={items}
        componentRequiredIndex={componentRequiredIndex}
        showComponentRequired={showComponentRequired}
      />

      <SquaresContainer fadeAnim={fadeAnim}>
        <View style={styles.textContent}>
          <Text style={styles.textTopSquares}>{textTopSquares}</Text>
        </View>
        <View style={styles.back}>
          <View style={styles.squaresContent}>
            <View style={styles.row}>{renderSquares()}</View>
          </View>

          <BarWait barWaitAnim={barWaitAnim} />
        </View>
      </SquaresContainer>
      {/* <Anmation /> */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#006d77",
    alignItems: "center",
    // justifyContent: "center",
  },
  squaresContent: {
    width: 4 * 80,
    // height: 5*66,
  },
  row: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  back: {
    // backgroundColor: "#006d77",

    // backgroundColor: '#3e4691',
    padding: 4,
    borderRadius: 5,
    // opacity:0.5
    // marginTop: -20,
  },
  textTopSquares: {
    // padding: 10,
    fontFamily: theme.fonts.main.ar,
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  textContent: {
    height: 30,
    // marginTop: -80,
  },
});
