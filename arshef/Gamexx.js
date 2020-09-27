import React, { useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import Constants from 'expo-constants';




const App = () => {
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(100);
 

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,

    }).start();
  }, )

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  })

  return (
    <View style={styles.container}>
      <Text>
        Loading…..
      </Text>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: "#8BED4F", width }]} />
      </View>
      <Text>
        {`${progress}%`}
      </Text>

    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  progressBar: {
    // flexDirection: 'row',
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    // borderColor: '#000',
    // borderWidth: 2,
    // borderRadius: 5
  }
});