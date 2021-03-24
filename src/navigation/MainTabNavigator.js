import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import * as screens from "../screens";
import TapContainer from "./TapContainer";
import { useSelector } from "react-redux";
import { strings } from "../utils/i18n";

const TransitionPropsRTL = {
  ...TransitionPresets.SlideFromRightIOS,
  gestureDirection: "horizontal-inverted",
};
const TransitionProps = {
  ...TransitionPresets.SlideFromRightIOS,
};
const ScreenOptions = {
  headerShown: true,
};

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  const app = useSelector((state) => state.app);

  return (
    <HomeStack.Navigator
      screenOptions={{ gestureEnabled: false }}
    >
      <HomeStack.Screen
        name="HomeScreeen"
        options={
          { ...TransitionPropsRTL,title: strings.t("home.screen-title"),...ScreenOptions
           }}
        component={screens.HomeScreen}
      />
      <HomeStack.Screen
        name="showGameScreeen"
        options={
          { ...TransitionPropsRTL,headerShown: false }
        }
        component={screens.showGame}
      />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        options={{ ...TransitionPropsRTL, title: strings.t("settings.screen-title"),...ScreenOptions}}
        component={screens.settingsScreen}
      />
      <SettingsStack.Screen
        name="test"
        options={
          { ...TransitionPropsRTL,...ScreenOptions }
        }
        component={screens.LanguagesScreen}
      />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App({ navigation, route, focused }) {
  return (
    <TapContainer navigation={navigation} focused={focused}>
      <Tab.Navigator
        screenOptions={({ navigation, route }) => ({
          tabBarVisible: false,
        })}
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen
          name="HomeTap"
          options={{ title: "Home" }}
          component={HomeStackScreen}
        />
        <Tab.Screen
          name="SettingsTap"
          options={{ title: "Settings" }}
          component={SettingsStackScreen}
        />
      </Tab.Navigator>
    </TapContainer>
  );
}
