import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

const ButtonGoBack = ({ navigation, app}) => {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View
            style={[
              styles.buttonGoBackContent,
              app.isRTL ? { right: 0 } : { leftL: 0 },
            ]}
          >
            <Ionicons
              name={app.isRTL ? "ios-arrow-forward" : "ios-arrow-back"}
              size={30}
              color="#fff"
            />
          </View>
        </TouchableWithoutFeedback>
    )
}

export default ButtonGoBack

const styles = StyleSheet.create({
    
  buttonGoBackContent: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 50,
    position: "absolute",
    top: 20,
  },

})
