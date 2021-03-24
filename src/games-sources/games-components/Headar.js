import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { MaterialIcons } from "@expo/vector-icons";
import { Header } from "react-native/Libraries/NewAppScreen";
var STATUS_BAR_HEIGHT = getStatusBarHeight();

const Headar = (props) => {
  const headerAnimRef = useRef(new Animated.Value(-112)).current;
  

  const check = (answer) => {
    if (answer === true) return "#55a630";
    else if (answer === null) return "silver";
    else return "red";
  };

  
  useEffect(() => {
    if (props.showHeader) {
      Animated.timing(headerAnimRef, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
        // easing: Easing.bounce,
      }).start(() => {});
    }
  }, [props.showHeader]);
  const renderItems = () => {
    return props.answers.map((item, i) => {
      return (
        <View
          style={[styles.answer,{backgroundColor: check(item)}]}
          key={i}
        ></View>
      );
    });
  };

  return (
      <Animated.View
        style={{
          transform: [
            {
              translateY: headerAnimRef,
            },
          ],
          height: props.headerHeight,
        }}
      >
        <View style={styles.headerContent}
        onLayout={(event) => {
          props.setHeaderHeight(event.nativeEvent.layout.height);
        }}
        >
          <View style={styles.headerProps}>
            <MaterialIcons
              onPress={() => props.navigation.goBack()}
              style={styles.icon}
              name="pause-circle-outline"
              size={30}
              color="black"
            />

            <View style={styles.item}>
              <Text style={styles.title}>المستوى</Text>
              <Text style={styles.number}>{props.headerProps.level}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>النقاط</Text>
              <Text style={styles.number}>{props.headerProps.score}</Text>
            </View>
            {/* <View style={styles.item}>
              <Text style={styles.title}>الوقت</Text>
             {props.timerComponent}
            </View> */}
          </View>
          <View style={styles.answersContent}>{renderItems()}</View>
        </View>
      </Animated.View>
  );
};

export default Headar;

const styles = StyleSheet.create({
  container: {
   
  },
  headerContent: {
    paddingTop: STATUS_BAR_HEIGHT,
    paddingBottom: 5,
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#fff",
    // borderBottomEndRadius: 10,
    // borderBottomStartRadius: 10,
  },
  headerProps: {
    flexDirection: "row-reverse",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  title: {
    alignSelf: "center",
    fontFamily: "DroidKufi-Bold",
    // color: "#7366ff"
  },
  number: {
    alignSelf: "center",
    fontFamily: "DroidKufi-Bold",
    // color: "#7366ff"
  },
  icon: {
    alignSelf: "center",
  },
  answersContent: {
    flexDirection: "row-reverse",
    marginVertical: 6,
    marginStart:20
  },
  item: {
    // backgroundColor: "silver",
    width: 70,
  },
  answer :{
    height: 12,
    width: 12,
    marginHorizontal: 4,
    // marginTop: 4,
    borderRadius: 2,
  }
});
