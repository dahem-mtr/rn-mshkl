import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppContext from "../utils/AppContext";
import { theme } from "../utils/theme";
import Header from "../components/Left";
import { strings } from "../utils/i18n";
import { games } from "../games-sources/games";
import AppLoading from "./AppLoading";

import GamesListHorizontal from "../components/GamesListHorizontal";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const app = useSelector((state) => state.app);
  const appState = useContext(AppContext);
  const [appLoaded, setAppLoaded] = useState(false);
  

  // useEffect(() => {
  //   if (appLoaded) 
  //   SplashScreen.hide()
    
  // }, [appLoaded]);

  
  return (
    <View style={styles.container}>

      <ScrollView>
        
        { appLoaded ?
        <GamesListHorizontal navigation={navigation} app={app} type={"save"} games={games} backgroundColor={"#29ABE2"} title={strings.t("home.memory-games")} />
      : null
      }
        
        
      </ScrollView>
      <AppLoading setAppLoaded={setAppLoaded}/>
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
    marginVertical:10,
    alignSelf: "center",
    fontFamily: theme.fonts.main.ar,
    // color: theme.colors.text,
    fontSize: 30,
    marginHorizontal: 10,
    // marginBottom: 10,
  },
});

export default HomeScreen;
