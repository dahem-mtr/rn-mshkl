import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import { Audio } from "expo-av";

const SoundsLoad = (props) => {
    // const [sounds, setSounds] = useState({});
    const [currectSound, setCurrectSound] = useState(null);
    const [wrongSound, setwrongSound] = useState(null);
    const [clickSound, setClickSound] = useState(null);
    

    async function correctSoundLoad() {
        const { sound } = await Audio.Sound.createAsync(
            require("../games-sound-effects/correct1.wav"),
            {
                shouldPlay: false,
                isLooping: false,
            }
        );

        setCurrectSound(sound);
    }
    async function wrongSoundLoad() {
        const { sound } = await Audio.Sound.createAsync(
            require("../games-sound-effects/error.wav"),
            {
                shouldPlay: false,
                isLooping: false,
                // rate: 6,
                // volume: 10
            }
        );

        setwrongSound(sound);
    }

    async function clickSoundLoad() {
        const { sound } = await Audio.Sound.createAsync(
            require("..//games-sound-effects/sound3.wav"),
            {
                shouldPlay: false,
                isLooping: false,
                // rate: 6,
                // volume: 10
            }
        );

        setClickSound(sound);
    }
    useEffect(() => {

      

        correctSoundLoad();
        wrongSoundLoad();
        clickSoundLoad();
    }, []);

    useEffect(() => {
        if (currectSound && wrongSound && clickSound) {
            props.setSounds({ currectSound, wrongSound, clickSound });
        }
    }, [currectSound, wrongSound, clickSound]);


    return <View></View>
};

export default SoundsLoad
