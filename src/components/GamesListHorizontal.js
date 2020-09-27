import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { theme } from "../utils/theme";
import Game from "../components/Game";
const GamesListHorizontal = ({
  navigation,
  app,
  games,
  title,
  backgroundColor,
  type
}) => {
  const scrollRef = useRef();

  const onPress = (item) => {
    navigation.navigate("showGameScreeen", {item });
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
    <View
      style={[
        styles.content,
        {
          backgroundColor: backgroundColor,
          shadowColor: backgroundColor,
        },
        app.isRTL
          ? {
            alignItems:"flex-end",
            borderTopEndRadius: app.isRTL ? 10 : 0,
            borderBottomEndRadius: app.isRTL ? 10 : 0,
            }
          : {
            alignItems: "flex-start",
            borderTopStartRadius: app.isRTL ? 0 : 10,
            borderBottomStartRadius: app.isRTL ? 0 : 10,
              
            },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
      <FlatList
        ref={scrollRef}
        onLayout={() => scrollTo()}
        decelerationRate={0}
        snapToInterval={200} //your element width
        snapToAlignment={"center"}
        initialNumToRender={200}


        data={games}
        
        renderItem={({ item, index }) => (
          item.type == type ? 
            <Game item={item} onPress={onPress} app={app} index={index} />
            : null
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: app.isRTL ? "row-reverse" : "row",
          padding: 10,
        }}
      />
    </View>
  );
};

export default GamesListHorizontal;

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    marginVertical: 10,
    // backgroundColor: "#aed8a7",
    // #6fc3e2

    paddingVertical: 10,
    shadowOpacity: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  title: {
    fontFamily: theme.fonts.main.ar,
    color: "#fff",
    fontSize: 16,

    marginHorizontal: 10,
    // marginBottom: 10,
  },
});
