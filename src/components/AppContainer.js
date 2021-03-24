import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import ScreenFading from "./ScreenFading";

const AppContainer = (props) => {
  const app = useSelector((state) => state.app);



  return (
    <View style={styles.container}>
      {props.children}
      {app.isLoading && <View style={styles.appLoading} />}
       <ScreenFading {...app} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appLoading: {
    position: "absolute",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default AppContainer;
