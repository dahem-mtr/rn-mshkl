import React from 'react'

import { I18nManager,StyleSheet, Text, View } from 'react-native';
import store from "./src/store/";
import { Provider } from "react-redux";
// import i18n from "./i18n";
import { AppProvider } from "./src/utils/AppContext";
import App from './src/navigation'
// i18n.locale = "ar";
import GlobalComponent from "./src/components/GlobalComponent"
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
export default function Min() {
  const appState = {
    strings: "i18n",
    name: 'sami'
  };

  
  return (

    <Provider store={store}>
      <AppProvider value={appState}>
        <App />
        <GlobalComponent/>
      </AppProvider>
    </Provider>
     
  )
}

