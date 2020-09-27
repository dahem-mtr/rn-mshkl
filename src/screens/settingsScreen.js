import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch, InteractionManager, ScrollView } from "react-native";
import { storeData } from "../storage";

import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import AppContext from "../utils/AppContext";
import { setLang, setLoading } from "../actions/appActions";
import i18n, { strings } from "../utils/i18n";

// import i18n1 from "../../i18n";
import { theme } from "../utils/theme";
import ParallaxScrollView from "react-native-parallax-scroll-view";

const settingsScreen = ({ navigation }) => {
  const appState = useContext(AppContext);
  const dispatch = useDispatch();

  const [sound1, setSound] = useState(null);
  const app = useSelector((state) => state.app);
  const [isEnabled, setIsEnabled] = useState(true);
  const [interactionsComplete, setInteractionsComplete] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setInteractionsComplete(true);
    });
  });

  const onPress = () => {
    // sound1.replayAsync();

    navigation.goBack();
  };

  const onPressL = () => {
    dispatch(setLoading(true));
    // navigation.navigate("HomeTap")

    if (app.lang == "en") {
      storeData("lang", "ar")
      dispatch(setLang("ar"));
      i18n.locale = "ar";
    } else {
      storeData("lang", "en")
      dispatch(setLang("en"));
      i18n.locale = "en";
    }
    setTimeout(() => {

      dispatch(setLoading(false));
    }, 600);



  };
  const props = [
    {
      title: strings.t("settings.voices"),
      icon: <Octicons name="unmute" size={23} color="#29ABE2" />,
      button: (
        <Switch
          // style={{borderStartColor}}
          trackColor={{ true: "#29ABE2" }}
          thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
          // ios_backgroundColor="#3e3e3e"
          // ios_backgroundColor="#ddd"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      ),
    },
    {
      title: strings.t("settings.language"),
      icon: <MaterialIcons name="language" size={24} color="#29ABE2" />,
      button: (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            // navigation.navigate('LanguagesScreen')
            onPressL()
          }
          title="Open modal"
        >
          <Text style={styles.title}>
            {app.isRTL ? "  العربية " : "  ENGLISH"}
          </Text>
        </TouchableOpacity>
      ),
    },
  ];

  const renderData1 = () => {
    return props.map(function (item, i) {
      return (
        <View
          key={i}
          style={[
            styles.box,
            { flexDirection: app.isRTL ? "row-reverse" : "row" },
          ]}
        >
          <View style={styles.elment}>
            <View style={{ flexDirection: app.isRTL ? "row-reverse" : "row" }}>
              <View style={styles.iconContent}>{item.icon}</View>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>

          <View style={styles.elment}>{item.button}</View>
        </View>
      );
    });
  };
  if (interactionsComplete) {
    return (
      <View
        style={styles.container}
      >
        <ParallaxScrollView
          backgroundColor="#fff"
          fadeOutForeground={true}
          contentContainerStyle={{
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}
          renderStickyHeader={() =>
            <Text
              style={[styles.title4, { alignSelf: "center" }]}
            >
              المزيد
            </Text>
          }
          stickyHeaderHeight={70}
          parallaxHeaderHeight={160 }
          showsVerticalScrollIndicator={false}
          outputScaleValue={2}
          renderBackground={() => (
            <Text
              style={[styles.title2, { alignSelf: app.isRTL ? "flex-end" : "flex-start" }]}
            >
              المزيد
            </Text>
          )}
        >
          <View>
            


            <Text
              style={[styles.title3, , { alignSelf: app.isRTL ? "flex-end" : "flex-start", }]}
            >
              {strings.t("settings.settings-title")}
            </Text>

            {renderData1()}

          </View>
        </ParallaxScrollView>
        

      </View>
    );
  }
  return null

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    paddingTop:20
  },
  box: {
    // marginTop: 5,
    height: 60,
    // width: '100%',
    // borderWidth: 0.6,
    // borderRadius: 60 / 6,
    // borderColor: "#dcdcdc",
    justifyContent: "space-between",
    backgroundColor: "#fff"
  },
  elment: {
    // backgroundColor: '#ddd',
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContent: {
    height: 40,
    width: 40,
    borderRadius: 40 / 3,
    // backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 13,
    marginHorizontal: 6,
    alignSelf: "center",
    fontWeight: "bold",
    // color: "#545F62",
    fontFamily: theme.fonts.main.ar
  },
  title2: {
    fontSize: 24,
    // color: "#29ABE2",

    fontWeight: "bold",
    marginTop: 120,
    alignSelf: 'center',
    marginHorizontal: 40,
    fontFamily: theme.fonts.main.ar
  },
  title3: {
    fontSize: 20,
    color: "#29ABE2",
    fontWeight: "bold",
    marginTop: 18,
    marginHorizontal: 10,
    fontFamily: theme.fonts.main.ar
  },title4: {
    fontSize: 18,
    // color: "#29ABE2",

    fontWeight: "bold",
    alignSelf: 'center',
    marginHorizontal: 10,
    fontFamily: theme.fonts.main.ar
  }
});

export default settingsScreen;
