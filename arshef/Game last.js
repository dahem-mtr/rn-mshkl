import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import Square from "./components/Square";
import SquaresContainer from "./containers/SquaresContainer";
import ItemsRequired from "./components/ItemsRequired";
import BarWait from "../../games-components/BarWait";
import { useSelector, useDispatch } from "react-redux";
import { controllerActions } from "../../../actions/controllerActions";

import images from "./utils/images";
import i18n from "../../i18n";

import { utils } from "../../games-utils";
import { utils as thisGameUtils } from "./utils";

import { anmations } from "./anmations";
import { theme } from "../../../utils/theme";
const index = ({ next }) => {
  const gameState = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const [textTopSquares, setTextTopSquares] = useState(false);
  const [enablePress, setEnablePress] = useState(false);
  const [listenIfSquaresFinished, setListenIfSquaresFinished] = useState(false);
  const [pressCounter, setPressCounter] = useState(0);
  // const [gameProps, setGameProps] = useState(null);

  const [itemsRequiredKeys, setItemsRequiredKeys] = useState([]);
  const [keysCorrect, setKeysCorrect] = useState([]);
  const [showItemsRequired, setShowItemsRequired] = useState(false);

  const [items, updateItems] = useState([]);

  const squaresAnimRef = useRef(new Animated.Value(0)).current;
  const barWaitAnimRef = useRef(
    new Animated.Value(-Dimensions.get("window").width)
  ).current;

  const Cleaning = (res) => {
      // play
      setKeysCorrect([]);
      setShowItemsRequired(false);
      setPressCounter(0);
      anmations.moveSquaresToLeft(squaresAnimRef, () => {
        // Callback after anmations ends

        updateItems([]);
    dispatch(controllerActions.setPlayResult(res));

      });
  };

  const showError = () => {
    // sounds.clickSound.replayAsync();
    utils.soundPlay("sound3.wav")

    updateItems((prevData) =>
      prevData.map((item) =>
        itemsRequiredKeys.includes(item.key) ? { ...item, show: true } : item
      )
    );

    utils.wait(1000).then(() => {
      Cleaning("UNCORRECT");
    });
  };

  const onPressSquare = (itemPressed) => {
    setEnablePress(false);
    setPressCounter((prevState) => prevState + 1);

    thisGameUtils.checkAnswer({
      updateItems,
      itemsRequiredKeys,
      itemPressed,
      callBack: (isCorrect) => {
        if (isCorrect) {
          setKeysCorrect([...keysCorrect, itemPressed.key]);
          // sounds.currectSound.replayAsync();
          utils.soundPlay("correct1.wav")
          if (gameState.playProps.numberRequired <= pressCounter + 1) {
            // go to Cleaning function
            setEnablePress(false);
  
            utils.wait(300).then(() => {
              Cleaning("CORRECT");

            });


          } else {
            setEnablePress(true);
          }
        }

        if (!isCorrect) {
          utils.soundPlay("error.wav")
          anmations.squaresVibration(squaresAnimRef, () => {
            // callBack
            utils.wait(300).then(() => {
              showError();
            });
          });

        }
        
      },
    });
  };

  useEffect(() => {
    if (listenIfSquaresFinished) {
      // after  render squares
      setListenIfSquaresFinished(false);
      anmations.startBarWaitingToSave(barWaitAnimRef, () => {
        // Callback after Waiting anmations ends
        thisGameUtils.closeSquares(updateItems);
        setTextTopSquares("");

        setShowItemsRequired(true);

        setEnablePress(true);
      });
    }
  }, [items, listenIfSquaresFinished]);

  
  useEffect(() => {
    if (gameState.playProps !== null) {
      var countSquares = gameState.playProps.countSquares,
        kyes = utils.createKeys(countSquares),
        // array => [0,1,2,3,...to countSquares]
        mixedIndexes = utils.shuffleArray(kyes),
        //  shuffle array indexes  to =>  [3,1,0,2]
        componentsInKeys = mixedIndexes.slice(0, gameState.playProps.countImages),
        // get the first 3 indexes from array MixedIndexes =>  [3,1,0]
        mixedImages = utils.shuffleArray(images),
        // images => [image1,image2,image3,image4,...]
        // MixedImages => [image2,image4,image1,image3,...]
        requiredKeys = componentsInKeys.slice(0, gameState.playProps.numberRequired);
      setItemsRequiredKeys(requiredKeys);

      setListenIfSquaresFinished(true);
      thisGameUtils.setToSquares({
        countSquares,
        componentsInKeys,
        mixedImages,
        updateItems,
      });
      setTextTopSquares("أحفظ اماكن الصور");
    }
  }, [gameState.playProps]);
  const RenderSquares = () => {
    return items.map((item, i) => {
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
  const MemoizedRocketComponent = React.memo(RenderSquares);

  return (
    <View style={styles.container}>
      {/* <Text>{userData.level}</Text> */}
      <ItemsRequired
        keysCorrect={keysCorrect}
        items={items}
        itemsRequiredKeys={itemsRequiredKeys}
        showItemsRequired={showItemsRequired}
        theme={theme}
      />
      <Text style={styles.textTopSquares}>{textTopSquares}</Text>
      <SquaresContainer squaresAnimRef={squaresAnimRef}>
        <View style={styles.row}>{RenderSquares()}</View>
      </SquaresContainer>
      <BarWait barAnimRef={barWaitAnimRef} height={10} color={"#fff"} />

      {/* <Anmation /> */}
    </View>
  );
};

export default React.memo(index);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  textTopSquares: {
    // padding: 10,
    fontFamily: theme.fonts.main.ar,
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    height: 30,
    marginBottom: 7,
  },
});
