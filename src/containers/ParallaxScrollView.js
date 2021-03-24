import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { theme } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
var STATUS_BAR_HEIGHT = getStatusBarHeight();
var IMAGE_HEIGHT = 230;
const ParallaxScrollView1 = (props) => (
  <View style={styles.container}>
    <ParallaxScrollView
      backgroundColor={props.item.backgroundColor}
      contentContainerStyle={styles.contentContainerStyle}
      parallaxHeaderHeight={IMAGE_HEIGHT +40}
      showsVerticalScrollIndicator={false}
      outputScaleValue={1.3}
      stickyHeaderHeight={STATUS_BAR_HEIGHT + 50}
      renderStickyHeader={() => (
        <Text
          style={[
            styles.gameTitle,
            { color: props.gameTitleColor, paddingTop: STATUS_BAR_HEIGHT + 5 },
          ]}
        >
          {props.item.titles[props.strings.t("lang")]}
        </Text>
      )}
      fadeOutForeground={true}
      renderForeground={() => (
        <View style={{ paddingTop: STATUS_BAR_HEIGHT }}>
          <TouchableWithoutFeedback onPress={props.onPress}>
            <View>
              <Image style={styles.image} source={props.item.image} />
              <Text style={[styles.gameTitle, { color: props.gameTitleColor }]}>
                {props.item.titles[props.strings.t("lang")]}
              </Text>

              {props.gameData}
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    >
      {props.children}
    </ParallaxScrollView>
    <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
      <View
        style={[
          styles.buttonGoBackContent,
          props.app.isRTL ? { right: 0 } : { leftL: 0 },
        ]}
      >
        <Ionicons
          name={props.app.isRTL ? "ios-arrow-forward" : "ios-arrow-back"}
          size={30}
          color={props.gameTitleColor}
        />
      </View>
    </TouchableWithoutFeedback>
  </View>
);

export default ParallaxScrollView1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainerStyle: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  row: {
    flexDirection: "row-reverse",
  },

  image: {
    width: Dimensions.get("window").width,
    height: 230,
  },
  gameTitle: {
    paddingTop: STATUS_BAR_HEIGHT,
    alignSelf: "center",
    fontSize: 16,
    marginHorizontal: 10,

    fontFamily: theme.fonts.main.ar,
  },
  buttonGoBackContent: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 50,
    position: "absolute",
    top: 20,
  },
  buttonGoBackContent: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 50,
    position: "absolute",
    top: STATUS_BAR_HEIGHT,
  },
});
