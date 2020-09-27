import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Game from "./Game";
import SingleGameContainer from "../../games-containers/SingleGameContainer";
// import { Audio } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import  SoundsLoad  from "../../games-utils/SoundsLoad";

const index = () => {
  const [sounds, setSounds] = useState({});
  // const [currectSound, setCurrectSound] = useState(null);
  // const [wrongSound, setwrongSound] = useState(null);
  // const [clickSound, setClickSound] = useState(null);
  const gameProps = {
    countSquares: 8,
    countImages: 3,
    numberRequired: 3,
  };

  // async function correctSoundLoad() {
  //   const { sound } = await Audio.Sound.createAsync(
  //     require("../../games-sound-effects/correct1.wav"),
  //     {
  //       shouldPlay: false,
  //       isLooping: false,
  //     }
  //   );

  //   setCurrectSound(sound);
  // }
  // async function wrongSoundLoad() {
  //   const { sound } = await Audio.Sound.createAsync(
  //     require("../../games-sound-effects/error.wav"),
  //     {
  //       shouldPlay: false,
  //       isLooping: false,
  //       // rate: 6,
  //       // volume: 10
  //     }
  //   );

  //   setwrongSound(sound);
  // }

  // async function clickSoundLoad() {
  //   const { sound } = await Audio.Sound.createAsync(
  //     require("../../games-sound-effects/sound3.wav"),
  //     {
  //       shouldPlay: false,
  //       isLooping: false,
  //       // rate: 6,
  //       // volume: 10
  //     }
  //   );

  //   setClickSound(sound);
  // }
  // useEffect(() => {
    
  //   correctSoundLoad();
  //   wrongSoundLoad();
  //   clickSoundLoad();
  // }, []);

  // useEffect(() => {
  //   if (currectSound && wrongSound && clickSound) {
  //     setSounds({ currectSound, wrongSound, clickSound });
  //   }
  // }, [currectSound, wrongSound, clickSound]);

  return (
    <View style={styles.container}>
      <SoundsLoad setSounds={setSounds}/>
      <SingleGameContainer gameName="حفظ الصور">
        <Game sounds={sounds} gameProps={gameProps} />
      </SingleGameContainer>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7366ff",
    // justifyContent: "center",
  },
});


