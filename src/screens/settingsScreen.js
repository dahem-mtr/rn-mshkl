import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  InteractionManager,
  ScrollView,
} from "react-native";
import { storeData } from "../storage";

import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import AppContext from "../utils/AppContext";
import { setLang, setLoading } from "../actions/appActions";
import i18n, { strings } from "../utils/i18n";
import Item from "../components/Item";

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

  const onPressLanguage = () => {
    dispatch(setLoading(true));
    // navigation.navigate("HomeTap")

    if (app.lang == "en") {
      storeData("lang", "ar");
      dispatch(setLang("ar"));
      i18n.locale = "ar";
    } else {
      storeData("lang", "en");
      dispatch(setLang("en"));
      i18n.locale = "en";
    }
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  };
  const props = [
    {
      title: strings.t("settings.voices"),
      icon: <Octicons name="unmute" size={23} color="#7366ff" />,
      button: (
        <Switch
          trackColor={{ true: "#7366ff" }}
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
      icon: <MaterialIcons name="language" size={24} color="#7366ff" />,
      button: (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            // navigation.navigate('LanguagesScreen')
            onPressLanguage()
          }
          title="Open modal"
        >
          <Text style={styles.lang}>
            {app.isRTL ? "< ENGLISH " : "< العربية"}
          </Text>
        </TouchableOpacity>
      ),
    },
  ];

  const listItems = () => {
    return props.map(function (item, i) {
      return (
        <View key={i}>
          <Item isRTL={app.isRTL} item={item} />
        </View>
      );
    });
  };
  if (interactionsComplete) {
    return (
      <ScrollView style={styles.container}>
        <Text
          style={[
            styles.ItemsTitle,
            ,
            { alignSelf: app.isRTL ? "flex-end" : "flex-start" },
          ]}
        >
          {strings.t("settings.screen-title")}
        </Text>

        {listItems()}
      </ScrollView>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    paddingTop: 40,
  },
  lang: {
    fontSize: 13,
    marginHorizontal: 6,
    alignSelf: "center",
    fontWeight: "bold",
    // color: "#545F62",
    fontFamily: theme.fonts.main.ar,
  },
  ItemsTitle: {
    fontSize: 20,
    // color: "#29ABE2",
    // color: "silver",
    fontWeight: "bold",
    marginTop: 18,
    marginHorizontal: 10,
    fontFamily: theme.fonts.main.ar,
  },
});

export default settingsScreen;
