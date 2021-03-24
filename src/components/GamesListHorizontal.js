import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { theme } from "../utils/theme";
import Game from "../components/Game";
const GamesListHorizontal = ({ navigation, app, games, title, type }) => {
  const scrollRef = useRef();

  const onPress = (item) => {
    navigation.navigate("showGameScreeen", { item });
  };
  const scrollTo = () => {
    if (app.isRTL)
      scrollRef.current.scrollToOffset({ animated: false, offset: 200000 });
    else scrollRef.current.scrollToOffset({ animated: false, offset: 0 });
  };
  useEffect(() => {
    scrollTo();
  }, [app.isRTL]);

  return (
    <View>
      
      <View
        style={[
          styles.content,
          app.isRTL
            ? {
                alignItems: "flex-end",
                borderTopEndRadius: 10,
                borderBottomEndRadius: 10,
                marginEnd:5
              }
            : {
                alignItems: "flex-start",
                borderTopStartRadius: 10,
                borderBottomStartRadius:  10,
                marginStart:5
              },
        ]}
      >
        <View style={styles.titleContent}>
        <Text
          style={[
            styles.title,{ alignSelf: app.isRTL ? "flex-end" : "flex-start" }]} >
          {title}
        </Text>
      </View>
        <FlatList
          ref={scrollRef}
          onLayout={() => scrollTo()}
          decelerationRate={0}
          snapToInterval={200} //your element width
          snapToAlignment={"center"}
          initialNumToRender={200}
          data={games}
          renderItem={({ item, index }) =>
            item.type == type ? (
              <Game item={item} onPress={onPress} app={app} index={index} />
            ) : null
          }
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: app.isRTL ? "row-reverse" : "row",
            padding: 10,
          }}
        />
      </View>
    </View>
  );
};

export default GamesListHorizontal;

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    shadowColor: "silver",
     shadowOpacity: 0.1,
    shadowOffset: {
      height: 2,
      width: 1,
    },

    paddingVertical: 10,
  },
  titleContent: {
    // backgroundColor: "#e5e5e5",
  },
  title: {
    fontFamily: theme.fonts.main.ar,
    paddingVertical: 10,
    fontSize: 16,
    // color: "#545F62",
    marginHorizontal: 10,
  },
});
