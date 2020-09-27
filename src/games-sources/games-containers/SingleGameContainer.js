import React, { useEffect, useState,useRef} from "react";
import { StyleSheet, Easing, View, Animated} from "react-native";
import Headar from "../games-components/Headar";
import CountDown from "../games-components/CountDown";
import SoundsLoad from "../games-utils/SoundsLoad";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../actions/appActions";

const SingleGameContainer = (props) => {
  const headerAnimRef = useRef(new Animated.Value(-80)).current;
  const dispatch = useDispatch();

  const [showCountDown, setShowCountDown] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (showHeader ) {
      Animated.timing(headerAnimRef, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.bounce,
      }).start(() => {
      });
    }
    else {
        headerAnimRef.setValue(-80);

    }
  }, [showHeader]);


  useEffect(() => {
    if (props.sounds && props.headerData.level) {
      dispatch(setLoading(false));
      setTimeout(() => {
        setShowCountDown(true)
        setTimeout(() => {
          setShowHeader(true);
        }, 500);

      }, 500);
    }
  }, [props.sounds, props.headerData]);

  return (
    <View style={[styles.container, {backgroundColor: props.backgroundColor}]}>
      <SoundsLoad setSounds={props.setSounds} />
      <Headar headerProps={props.headerProps} headerData={props.headerData} headerAnimRef={headerAnimRef}/>
      {props.children}
      {
        showCountDown ? (
          <CountDown sounds={props.sounds} afterCountDownEnd={props.afterCountDownEnd} />
        ) : null}
    </View>
  );
};

export default SingleGameContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
