import React, { useEffect, useState, useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";
import { useSelector, useDispatch } from "react-redux";
import AppContext from "../utils/AppContext";
import {theme} from "../utils/theme";
import { useFonts } from "expo-font";
import GamesList from "../components/GamesList";
import Left from "../components/Left";
StatusBar.setHidden(false);

const HomeScreen = ({ navigation }) => {
  const app = useSelector((state) => state.app);
  const appState = useContext(AppContext);

  // useEffect(() => {

  // }, []);

  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.backgroundColor }}>
      <View
        style={[
          styles.container,
                  { backgroundColor: theme.colors.backgroundColor }
        ]}
      >
        {/* {Top()} */}
        <View
          style={{
            flexDirection: app.isRTL ? "row" : "row-reverse",
            paddingHorizontal: 10,
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <GamesList
            isRTL={app.isRTL}
            string1={appState.strings.t("1")}
            string2={appState.strings.t("2")}
            navigation={navigation}
          />
          <Left navigation={navigation} app={app} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "black",
    marginTop: 10,
    width: 200,
  },
});

export default HomeScreen;
