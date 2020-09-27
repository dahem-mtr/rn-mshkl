import React, { useContext}from "react";
import { StyleSheet, View, Text, Dimensions, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../actions/appActions";

StatusBar.setHidden(false);
import AppContext from "../utils/AppContext";


const GlobalComponent = () => {
    const dispatch = useDispatch();
    const app = useSelector((state) => state.app);
    const appState = useContext(AppContext);


    

     if (app.isLoading)  
      return (
            <View style={styles.loading}>
              
            </View>
         );
    
    else 
         return null
};
const styles = StyleSheet.create({
    loading: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize:40,
    }
});

export default GlobalComponent;
