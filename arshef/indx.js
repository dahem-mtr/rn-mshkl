import React, { useRef} from 'react'
import { StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native'

const index = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;


  
  const show = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false
    }).start(() => { });
    
    
  };
  const hide = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false
    }).start(() => { });


  };
  const onPress = () => {
    show()
  };
  const onPress1 = () => {
    hide()
  };
  return (
   
    <View style={styles.container}>
      <View style={styles.back}>
        <Animated.View
          style={[styles.circl1, {
            // marginTop: fadeAnim,
            opacity: fadeAnim
            // backgroundColor: "#5ab74d",
          }]}
        >
          <Text style={styles.text}>الشكل المطلوب</Text>
        </Animated.View>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={
          () => show()
        }
      >
      <View style={styles.button}></View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={
          () => hide()
        }
      >
        <View style={styles.button}></View>
      </TouchableOpacity>
      </View>
   
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#2d3e50',
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  button: {
    height: 100,
    width: 300,
    backgroundColor: '#2d3e50',
    
  },
  circl1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
    
  },
  text: {
    // opacity: 0,
    padding:10,
    color: "#2d3e50",
    fontFamily: 'DroidKufi-Bold',
    fontSize: 18,
    textAlign: 'center',
  }, back: {
    height: 300,
    // width: 200,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  }
})
