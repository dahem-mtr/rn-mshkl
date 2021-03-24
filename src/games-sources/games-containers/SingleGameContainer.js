import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import Headar from "../games-components/Headar";
import CountDown from "../games-components/CountDown";
import ResultGame from "../games-components/ResultGame";
import SoundsLoad from "../games-utils/SoundsLoad";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../actions/appActions";

const SingleGameContainer = (props) => {
  const dispatch = useDispatch();

  const [showCountDown, setShowCountDown] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [time, setTime] = useState({
    m: 0,
    s: 0
  });
  const controllerProps = { ...props, showHeader,headerHeight,setHeaderHeight,timerComponent:<Text style={styles.number}>{time.m + " : " + time.s}</Text> };
useEffect(() => {
  setInterval(() => {
    setTime((prevState) =>
      prevState.s < 59
        ? {
            ...prevState,
            s: prevState.s + 1,
          }
        : {
            ...prevState,
            s: 0,
            m: prevState.m + 1,
          }
    );
  }, 1000);
}, []);

  useEffect(() => {
    if (props.headerProps.level && !props.app.screenIsFadeing) {
      // dispatch(actions.setScreenIsFadeing(false));

        setShowCountDown(true);

        setTimeout(() => {
          setShowHeader(true);
        }, 500);
    }
  }, [props]);

  return (
    <View
      style={[styles.container, { backgroundColor: props.backgroundColor }]}
    >
      <Headar {...controllerProps} />
      {props.children}
      {showCountDown && (
        <CountDown OnCountDownEnd={controllerProps.OnCountDownEnd} />
      )}
      <ResultGame {...controllerProps} />
    </View>
  );
};

export default SingleGameContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  number: {
    alignSelf: "center",
    fontFamily: "DroidKufi-Bold",
    // color: "#7366ff"
  },
});
