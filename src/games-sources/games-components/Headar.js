import React, { useRef, useEffect} from "react";
import { StyleSheet, Text, View, Animated, Easing} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { MaterialIcons } from "@expo/vector-icons";
const Headar = (props) => {
  const data = [
    {
      key: 1,
      state: true,
    },
    {
      key: 2,
      state: true,
    },
    {
      key: 3,
      state: false,
    },
    {
      key: 3,
      state: false,
    },
    {
      key: 3,
      state: false,
    },
    {
      key: 3,
      state: false,
    },
  ];


  const headerAnimRef = useRef(new Animated.Value(-80)).current;

  useEffect(() => {
    if (props.showHeader) {
      Animated.timing(headerAnimRef, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
        // easing: Easing.bounce,
      }).start(() => {
      });
    }
    else {
      headerAnimRef.setValue(-90);

    }
  }, [props.showHeader]);
  const renderItems = () => {
    return data.map((item, i) => {
      return (
        <View
          style={{
            height: 12,
            width: 33,
            backgroundColor: item.state ? "#55a630" : "silver",
            marginHorizontal: 4,
            marginTop: 4,
          }}
          key={i}
        >
          {/* <Text style={styles.title}>{item.key}</Text> */}
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            {
              translateY: headerAnimRef,
            },
          ],
        }}
      >
        <View style={styles.headerContent}>
          <View style={styles.headerProps}>
            <MaterialIcons
            onPress={()=> props.navigation.goBack()}
              style={styles.icon}
              name="pause-circle-outline"
              size={30}
              color="black"
            />
            <View>
              <Text style={styles.title}>المستوى</Text>
              <Text style={styles.number}>{props.headerProps.level}</Text>
            </View>
            <View>
              <Text style={styles.title}>النقاط</Text>
              <Text style={styles.number}>{props.headerProps.score}</Text>
            </View>
          </View>
          <View style={styles.data}>{renderItems()}</View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Headar;

const styles = StyleSheet.create({
  container: {
    height: 90,
  },
  headerContent: {
    height: 90,
    paddingTop: getStatusBarHeight() + 10,

    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  headerProps: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
  },
  title: {
    alignSelf: "center",
    fontFamily: "DroidKufi-Bold",
    // color: "#7366ff"
  },
  number: {
    alignSelf: "center",
    fontFamily: "DroidKufi-Bold",
    // color: "#7366ff"
  },
  icon: {
    // alignSelf:"center"
  },
  data: {
    flexDirection: "row-reverse",
    alignSelf: "center",
  },
});
