import React, { useRef, useEffect } from "react";
import { StyleSheet, Animated, View, Dimensions } from "react-native";
import { theme } from "../utils/theme";
import Game from "../components/Game";
import { actions } from "../actions/appActions";
import { useSelector, useDispatch } from "react-redux";

const ScreenFading = (props) => {
  const dispatch = useDispatch();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      dispatch(actions.setShowMInTab(false));
      dispatch(actions.setShowGame(true));

      fadeOut();
      
    });
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      dispatch(actions.setScreenIsFadeing(false));
    });
  };

  useEffect(() => {
    // dispatch(actions.setShowGame(true));
    if (props.screenIsFadeing) fadeIn();
    else fadeOut();
  }, [props.screenIsFadeing]);

  if (props.screenIsFadeing)
    return (
      <Animated.View style={[styles.screenFadeing, { opacity: fadeAnim }]} />
    );
  else return null;
};

export default ScreenFading;

const styles = StyleSheet.create({
  screenFadeing: {
    position: "absolute",
    // opacity:0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
