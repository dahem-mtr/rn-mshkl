import React, { useState } from "react";
import { View } from "react-native";
import { strings } from "../utils/i18n";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../actions/appActions";
import { theme } from "../utils/theme";
import SingleGameController from "../games-sources/games-controllers/SingleGameController";
import GameData from "../components/GameData";
import Users from "../containers/Users";
import ParallaxScrollView1 from "../containers/ParallaxScrollView";
import { controllerActions } from "../actions/controllerActions";
const showGame = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const params = route.params;
  const app = useSelector((state) => state.app);
  const onPress = () => {
    dispatch(actions.setScreenIsFadeing(true));

    dispatch(controllerActions.setGame(params.item));
  };

  if (app.showGame) return <SingleGameController navigation={navigation} />;
  
    return (
      <View style={{ flex: 1 }}>
        <ParallaxScrollView1
          item={params.item}
          gameTitleColor={"#fff"}
          app={app}
          navigation={navigation}
          strings={strings}
          onPress={onPress}
          // gameData={<GameData theme={theme} height={100} />}
        >
           <GameData theme={theme} height={100}/>

          <Users theme={theme} />
        </ParallaxScrollView1>
      </View>
    );
};

export default showGame;

{
  /* <ParallaxScrollView
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
              {params.item.titles[strings.t("lang")]}
            </Text>
          )}
          fadeOutForeground={true}
          renderForeground={() => (
            <View style={{ paddingTop: 20 }}>
              <TouchableWithoutFeedback onPress={onPress}>
                <View>
                  <Image style={styles.image} source={params.item.image} />
                  <Text style={styles.gameTitle}>
                    {params.item.titles[strings.t("lang")]}{" "}
                  </Text>

                  <GameData theme={theme} height={100} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        >
          <Users theme={theme} />
        </ParallaxScrollView> */
}
