import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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
const CountDown = ({afterCountDownEnd,sounds}) => {
    const [count, setcount] = useState(3);
    const start = () => {
        var i = 3;
        sounds.clickSound.replayAsync();

        let myInterval = setInterval(() => {
            if (i <= 1) {
                clearInterval(myInterval);
                setcount("");
                    afterCountDownEnd()
            } else {
                i = i - 1;
                setcount(i);
                sounds.clickSound.replayAsync();

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


