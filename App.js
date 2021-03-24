import React, { useEffect } from "react";

import { I18nManager, StyleSheet, Text, View } from "react-native";
import store from "./src/store/";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";
// import i18n from "./i18n";
import { AppProvider } from "./src/utils/AppContext";
import App from "./src/navigation";
// i18n.locale = "ar";

import AppContainer from "./src/components/AppContainer";
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
export default function Min() {
  const appState = {
    strings: "i18n",
    name: "sami",
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppProvider value={appState}>
        <AppContainer>
          <App />
        </AppContainer>
      </AppProvider>
    </Provider>
  );
}
