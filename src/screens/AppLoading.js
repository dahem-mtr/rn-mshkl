import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { storeData, getStoredData } from "../storage";
import {  useDispatch } from "react-redux";
import { setLang, setLoading } from "../actions/appActions";
import i18n from "../../i18n";
const appLoading = ( props ) => {
  const dispatch = useDispatch();

  const [langLoaded, setLangLoaded] = useState(false);

  let [fontsLoaded] = useFonts({
    "DroidKufi-Bold": require("../assets/fonts/ar/Sukar-Black.otf"),
  });

  useEffect(() => {
    getStoredData("lang").then((lang) => {
      if (lang) {
        dispatch(setLang(lang));
        i18n.locale = lang;
        setLangLoaded(true);
      } else {
        dispatch(setLang("ar"));
        i18n.locale = "ar";
        setLangLoaded(true);

      }
    });
  }, []);

  useEffect(() => {
    if (fontsLoaded && langLoaded);
   setTimeout(() => {
    props.setAppLoaded(true)
   }, 1000);
  }, [fontsLoaded, langLoaded]);

  return null
};



export default appLoading;
