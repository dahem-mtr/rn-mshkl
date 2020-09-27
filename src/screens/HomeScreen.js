import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppContext from "../utils/AppContext";
import { theme } from "../utils/theme";
import Header from "../components/Left";
import { strings } from "../utils/i18n";
import { games } from "../games-sources/games";

import GamesListHorizontal from "../components/GamesListHorizontal";
const HomeScreen = ({ navigation }) => {
  const app = useSelector((state) => state.app);
  const appState = useContext(AppContext);
  
  return (
    <View style={[styles.container, app.isRTL ? { paddingRight: 4 } : { paddingLeft: 4 }]}>

      <ScrollView>

        <GamesListHorizontal navigation={navigation} app={app} type={"save"} games={games} backgroundColor={"#29ABE2"} title={strings.t("home.memory-games")} />
        <GamesListHorizontal navigation={navigation} app={app} type={"focus"} games={games} backgroundColor={"#73ce75"} title={strings.t("home.focus-games")} />
        
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 20,
    backgroundColor: theme.colors.backgroundColor,
    
  },
  button: {
    backgroundColor: "black",
    marginTop: 10,
    width: 200,
  },
  screenTitle: {
    alignSelf: "center",
    fontFamily: theme.fonts.main.ar,
    color: theme.colors.text,
    fontSize: 20,
    marginRight: 10,
    // marginBottom: 10,
  },
});

export default HomeScreen;
