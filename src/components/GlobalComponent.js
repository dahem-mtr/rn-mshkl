import React, { useContext } from "react";
import { StyleSheet, View, Text, Dimensions, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";

StatusBar.setHidden(false);


const GlobalComponent = () => {
    const dispatch = useDispatch();
    const app = useSelector((state) => state.app);




    if (app.isLoading)
        return (
            <View style={styles.loading}>

            </View>
        );


    return null
};
const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        top: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 40,
    }
});

export default GlobalComponent;
