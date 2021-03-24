import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Square from "./components/Square";
import SquaresContainer from "./containers/SquaresContainer";
import ItemsRequired from "./components/ItemsRequired";
import BarWait from "../../games-components/BarWait";
import { useSelector, useDispatch } from "react-redux";
import { controllerActions } from "../../../actions/controllerActions";

import images from "./utils/images";

import { utils } from "../../games-utils";
import { utils as thisGameUtils } from "./utils";

import { anmations } from "./anmations";
import { theme } from "../../../utils/theme";
var device = Dimensions.get("window");
const index = () => {
  const controller = useSelector((state) => state.controller);
  const dispatch = useDispatch();

  const [textTopSquares, setTextTopSquares] = useState("");
  const [enablePress, setEnablePress] = useState(false);
  const [enablePressImSave, setEnablePressImSave] = useState(false);
  const [listenIfSquaresFinished, setListenIfSquaresFinished] = useState(false);
  const [pressCounter, setPressCounter] = useState(0);

  const [itemsRequiredKeys, setItemsRequiredKeys] = useState([]);
  const [keysCorrect, setKeysCorrect] = useState([]);
  const [showItemsRequired, setShowItemsRequired] = useState(false);
  const [numberRequired, setNumberRequired] = useState(false);

  const [items, updateItems] = useState([]);

  const squaresAnimRef = useRef(new Animated.Value(0)).current;
  const barWaitAnimRef = useRef(new Animated.Value(-device.width)).current;

  const Cleaning = (res) => {
    // play
    setKeysCorrect([]);
    setShowItemsRequired(false);
    setPressCounter(0);
    anmations.moveSquaresToLeft(squaresAnimRef, () => {
      // Callback after anmation end

      updateItems([]);
      dispatch(controllerActions.setPlayResult(res));
    });
  };

  const showError = () => {
    
    utils.soundPlay("sound3.wav");

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
          utils.soundPlay("correct1.wav");
          if (numberRequired <= pressCounter + 1) {
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
          utils.soundPlay("error.wav");
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

  const onPressImSave = () => {
    barWaitAnimRef.setValue(-device.width);

    Animated.timing(barWaitAnimRef).stop();
  };
  useEffect(() => {
    if (listenIfSquaresFinished) {
      // after  render squares
      setListenIfSquaresFinished(false);
      setEnablePressImSave(true);
      anmations.startBarWaitingToSave(barWaitAnimRef, () => {
        // Callback after Waiting anmations ends
        setEnablePressImSave(false);
        thisGameUtils.closeSquares(updateItems);

        setTextTopSquares("");

        setShowItemsRequired(true);

        setEnablePress(true);
      });
    }
  }, [items, listenIfSquaresFinished]);

  useEffect(() => {
    if (controller.playProps.isPlay) {
      var playProps = thisGameUtils.getGameProps(controller.playProps.level);
      setNumberRequired(playProps.numberRequired);
      var countSquares = playProps.countSquares,
        kyes = utils.createKeys(countSquares),
        // array => [0,1,2,3,...to countSquares]
        mixedIndexes = utils.shuffleArray(kyes),
        //  shuffle array indexes  to =>  [3,1,0,2]
        componentsInKeys = mixedIndexes.slice(0, playProps.countImages),
        // get the first 3 indexes from array MixedIndexes =>  [1,2,0]
        mixedImages = utils.shuffleArray(images),
        requiredKeys = componentsInKeys.slice(0, playProps.numberRequired);
      setItemsRequiredKeys(requiredKeys);

      setListenIfSquaresFinished(true);
      thisGameUtils.setToSquares({
        countSquares,
        componentsInKeys,
        mixedImages,
        updateItems,
      });
      setTextTopSquares(pressCounter < 1 ?  "أحفظ اماكن الصور" : "") ;
    }
  }, [controller.playProps]);
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
  const renderItem = ({ item }) => (
    <Square
          onPressSquare={onPressSquare}
          item={item}
          enablePress={enablePress}
        />
  );
  return (
    <View style={styles.container}>
      <ItemsRequired
        keysCorrect={keysCorrect}
        items={items}
        itemsRequiredKeys={itemsRequiredKeys}
        showItemsRequired={showItemsRequired}
        theme={theme}
      />
      <Text style={styles.textTopSquares}>{textTopSquares}</Text>
      <SquaresContainer squaresAnimRef={squaresAnimRef}>
        <View style={styles.row}>
          
          
          {RenderSquares()}
          
          {/* <FlatList
          // initialNumToRender={100}
          numColumns={3}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index.toString()}
        key={3}
      /> */}
          </View>
      </SquaresContainer>
      
        <BarWait barAnimRef={barWaitAnimRef} height={10} color={"#fff"} />
      {enablePressImSave && (
        <TouchableWithoutFeedback onPress={() => onPressImSave()}>
          <View style={styles.buttunIsSaved}></View>
        </TouchableWithoutFeedback>
      )}
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
    alignSelf: "center",
  },

  textTopSquares: {
    fontFamily: theme.fonts.main.ar,
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    height: 30,
    marginBottom: 7,
  },
  buttunIsSaved: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
  },
});

// barWaitAnimRef.stopAnimation(({value}) => console.log("Final Value: " + value))
// const animatedListenerId = barWaitAnimRef.addListener((progress) => {
//   console.log("Final Value: " + progress.value)

// });
// Animated.timing(barWaitAnimRef).stop()
// setTimeout(() => {
// Animated.timing(barWaitAnimRef).start(()=> {alert("DFD")})
// console.log("is >>>"+barWaitAnimRef.__getValue())
// console.log(barWaitAnimRef._value)

// }, 1000);
