import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { utils } from "../games-utils";

const style = {content: {
    position: "absolute",
    alignSelf: "center",
    top: "50%",
},
    number: {
        fontSize: 70,
        color: "#fff",
        fontWeight: "900",
    },}
const CountDown = ({OnCountDownEnd}) => {
    const [count, setcount] = useState(3);
    const start = () => {
        var i = 3;
        utils.soundPlay("sound3.wav")


        let myInterval = setInterval(() => {
            if (i <= 1) {
                clearInterval(myInterval);
                setcount("");
                    OnCountDownEnd()
            } else {
                i = i - 1;
                setcount(i);
                    utils.soundPlay("sound3.wav")


            }
        }, 800);  
    }
  useEffect(() => {
    start()
  }, []);
  return (
      <View style={[style.content, {}]}>
          <Text style={[style.number, {}]}>{count}</Text>
    </View>
  );
};

export default CountDown;


