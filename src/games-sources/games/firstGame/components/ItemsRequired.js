import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Animated, Text } from "react-native";

const ItemsRequired = ({
  items,
  itemsRequiredKeys,
  showItemsRequired,
  keysCorrect,
}) => {
  const ItemsRequiredAnimRef = useRef(new Animated.Value(700)).current;
  const showItems = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(ItemsRequiredAnimRef, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {});
  };

  useEffect(() => {
    if (showItemsRequired) {
      showItems();
    } else {
      ItemsRequiredAnimRef.setValue(700);
    }
  }, [showItemsRequired]);
  const image = () => {
    if (showItemsRequired) {
      return itemsRequiredKeys.map((key, i) => {
        return (
          <View key={i} style={{ flexDirection: "row-reverse" }}>
            <View style={[styles.sec, { width: i < 1 ? 40 : 9 }]}></View>

            <View style={styles.component}>
              {items[key].component}

              {keysCorrect.includes(key) ? (
                <View style={styles.d}></View>
              ) : null}
            </View>
          </View>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: ItemsRequiredAnimRef,
          },
        ],
      }}
    >
      <View style={styles.showImageRContent}>{image()}</View>
    </Animated.View>
  );
};

export default React.memo(ItemsRequired);

const styles = StyleSheet.create({
  showImageRContent: {
    // marginTop: 30,
    height: 110,
    flexDirection: "row-reverse",
    // backgroundColor: "#00000040",
    borderRadius: 4,
    
  },
  animatedView: {
    // justifyContent: 'center',
    // backgroundColor:'#ddd'
    // marginLeft:-10
  },
  text: {
    marginTop: 5,
    fontFamily: "DroidKufi-Bold",
    fontSize: 25,
    color: "#fff",
    alignSelf: "center",
    marginHorizontal: 10,
  },
  component: {
    height: 65,
    width: 65,
    backgroundColor: "#373f83",
    padding: 5,
    borderRadius: 4,
    alignSelf: "center",
    justifyContent: "center",
  },
  sec: {
    height: 9,
    width: 9,
    backgroundColor: "#373f83",
    alignSelf: "center",
  },
  d: {
    height: 10,
    width: 90,
    backgroundColor: "#ffffff",
    position: "absolute",
    transform: [{ rotate: "-30deg" }],
    borderRadius: 4,
    marginLeft: -10,
  },
});
