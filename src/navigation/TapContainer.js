import React, { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons as MaterialIcon,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
// 00b8fc
const TapContainer = (props) => {
  const [routeFocused, setRouteFocused] = useState("HomeScreeen");
  const app = useSelector((state) => state.app);

  const onPress = (tab) => {
    setRouteFocused(tab.routeName);
    if (tab.routeName == routeFocused) {
      props.navigation.navigate(tab.routeName);
    } else {
      props.navigation.navigate(tab.stackName);
    }
  };

  const tabs = [
    {
      title: "home",
      routeName: "HomeScreeen",
      stackName: "HomeTap",
    },
    {
      title: "settings",
      routeName: "SettingsScreen",
      stackName: "SettingsTap",
    },
  ];
  const getIcon = (routeName) => {
    if (routeName == "HomeScreeen") {
      return (
        <MaterialIcon
          name={"home"}
          size={33}
          color={routeName == routeFocused ? "#7366ff" : "silver"}
        />
      );
    }
    if (routeName == "SettingsScreen") {
      return (
        <Ionicons
          name={"ios-list-box"}
          size={30}
          color={routeName == routeFocused ? "#7366ff" : "silver"}
        />
      );
    }
  };

  const renderTabs = () => {
    return tabs.map((tab, i) => {
      return (
        <TouchableWithoutFeedback key={i} onPress={() => onPress(tab)}>
          <View style={styles.tab}>{getIcon(tab.routeName)}</View>
        </TouchableWithoutFeedback>
      );
    });
  };

    return (
      <View style={styles.container}>
        {props.children}
       { app.showMinTab?
        <View
          style={[
            styles.tabsContent,
            { flexDirection: app.isRTL ? "row-reverse" : "row" },
          ]}
        >
          {renderTabs()}
          </View>
          : null
        }
      </View>
    );
};

export default TapContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // #29ABE2
  },
  tabsContent: {
    height: 40,
    backgroundColor: "#fff",
    justifyContent: "space-around",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
