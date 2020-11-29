import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import  { strings } from "../utils/i18n";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../actions/appActions";
import { theme } from "../utils/theme";
import { games } from "../games-sources/games";
import  SingleGame  from "../games-sources/games-controllers/SingleGame";
import Footer from "../components/Footer";
import GameData from "../components/GameData";
import Users  from "../containers/Users";
import { gameActions } from "../actions/gameActions";

const showGame = ({ navigation, route }) => {
  const [showGame, setShowGame] = useState(false);
  const dispatch = useDispatch();

  const params = route.params;

  const onPress = () => {
    dispatch(actions.setGameIsLoading(true));
    dispatch(actions.setShowMInTab(false));

    dispatch(gameActions.setGame(params.item));

    setShowGame(true);
  };

  if (!showGame) {
    return (
      <View style={styles.container}>
        <ParallaxScrollView
          
          backgroundColor={params.item.backgroundColor}
          contentContainerStyle={{
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}
          parallaxHeaderHeight={200 + 190}
          showsVerticalScrollIndicator={false}
          outputScaleValue={1.3}
          stickyHeaderHeight={70}
          renderStickyHeader={() => (
            <Text style={[styles.gameTitle, { paddingTop: 20 }]}>
              {params.item.titles[strings.t('lang')]}
            </Text>
          )}
          fadeOutForeground={true}
          renderForeground={() => (
            <View style={{ paddingTop: 20 }}>
              <Image style={styles.image} source={params.item.image} />
              <Text style={styles.gameTitle}>{params.item.titles[strings.t('lang')]} </Text>

              <GameData theme={theme} height={100} />
            </View>
          )}
        >
          <Users theme={theme}/>
        </ParallaxScrollView>
        <Footer onPress={onPress}navigation={navigation}/>
      </View>
    );
  } else {
    return <SingleGame navigation={navigation}/>
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row-reverse",
  },
  
  image: {
    // marginTop:60,
    width: Dimensions.get("window").width,
    height: 230,
    // borderRadius: 8,
    // resizeMode: 'stretch', // or 'stretch'
  },
  gameTitle: {
    alignSelf: "center",
    fontSize: 16,
    marginHorizontal: 10,
    color: "#fff",

    fontFamily: theme.fonts.main.ar,
  },
  
});

export default showGame;
