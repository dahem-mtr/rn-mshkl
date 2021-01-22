import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";
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
  const controllerProps = {...props, showHeader}




  useEffect(() => {
    if (props.headerProps.level) {
      dispatch(actions.setGameIsLoading(false));

      setTimeout(() => {
        setShowCountDown(true)

        setTimeout(() => {
          setShowHeader(true);
        }, 500);

      }, 1000);
    }
  }, [props.headerProps]);

  return (
    <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
      <Headar {...controllerProps} />
      {props.children}
      {
        showCountDown &&
        <CountDown OnCountDownEnd={controllerProps.OnCountDownEnd} />
      }
      <ResultGame {...controllerProps} />
    </View>
  );
};

export default SingleGameContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
