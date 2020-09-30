import React, { useEffect, useState,useRef} from "react";
import { StyleSheet, View, Animated} from "react-native";
import Headar from "../games-components/Headar";
import CountDown from "../games-components/CountDown";
import SoundsLoad from "../games-utils/SoundsLoad";
import { useSelector, useDispatch } from "react-redux";
import { actions} from "../../actions/appActions";

const SingleGameContainer = (props) => {
  const dispatch = useDispatch();

  const [showCountDown, setShowCountDown] = useState(false);
  const [showHeader, setShowHeader] = useState(false);




  useEffect(() => {
    if (props.sounds && props.headerProps.level) {
      dispatch(actions.setLoading(false));
      dispatch(actions.setShowMInTab(false));
      
      setTimeout(() => {
        setShowCountDown(true)
        setTimeout(() => {
          setShowHeader(true);
        }, 500);

      }, 500);
    }
  }, [props.sounds, props.headerProps]);

  return (
    <View style={[styles.container, {backgroundColor: props.backgroundColor}]}>
      <SoundsLoad setSounds={props.setSounds} />
      <Headar showHeader={showHeader}headerProps={props.headerProps} headerData={props.headerData}/>
      {props.children}
      {
        showCountDown && 
          <CountDown sounds={props.sounds} afterCountDownEnd={props.afterCountDownEnd} />
        }
    </View>
  );
};

export default SingleGameContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
