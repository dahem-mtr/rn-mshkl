import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import * as screens from "../screens";
import { TabNavigator, Header, theme } from "../utils/theme";
import TapContainer from "./TapContainer";
import { useSelector } from "react-redux";

const TransitionPropsRTL = {
  ...TransitionPresets.ModalSlideFromBottomIOS,
  // gestureDirection: "horizontal-inverted",
};
const TransitionProps = {
  ...TransitionPresets.SlideFromRightIOS,
};
const ScreenOptions = {
  headerShown: false,
};

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  const app = useSelector((state) => state.app);

  return (
    <HomeStack.Navigator
      screenOptions={{ gestureEnabled: false }}
    >
      <SettingsStack.Screen
        name="HomeScreeen"
        options={{ headerShown: false }}
        component={screens.HomeScreen}
      />
      <SettingsStack.Screen
        name="showGameScreeen"
        options={
          { ...TransitionPresets.ModalSlideFromBottomIOS, ...ScreenOptions }
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
        options={{ headerShown: false, title: "ss" }}
        component={screens.settingsScreen}
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
