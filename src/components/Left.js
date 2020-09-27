import React from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../utils/theme";

const Header = ({ navigation, app }) => {
 
  const onPress = () => {

    navigation.navigate("Settings");
  };
  return (
    <View
      style={{
        flexDirection: app.isRTL ? "row-reverse" : "row",paddingTop:20,paddingBottom:5,backgroundColor:'#fff'
      }}
    >
      <Feather
        style={styles.icon}
        onPress={() => onPress()}
        name="settings"
        size={35}
        color="#545F62"
      />
     
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  typeText: {
    color: "#29ABE2",
    fontFamily: theme.fonts.main.ar,
    fontSize: 14,
    textAlign: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  }
});

