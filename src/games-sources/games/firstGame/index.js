import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Game from "./Game";
import SingleGameContainer from "../../games-containers/SingleGameContainer";
import { useSelector, useDispatch } from "react-redux";
import { utils as thisGameUtils } from "./utils";
import { storeData, getStoredDataObject } from "../../../storage";

const index = () => {
  const [sounds, setSounds] = useState(null);
  const [gameProps, setGameProps] = useState(null);
  const [playCounter, setPlayCounter] = useState(0);
  const dispatch = useDispatch();

  const [headerData, setHeaderData] = useState({
    level: null,
    score: null,
  });
  const headerProps = {
    score: headerData.score,
    level: headerData.level,
  };

  const next = (result) => {
    if (result == true) {
      setHeaderData({
        level: headerData.level + 1,
        score: headerData.score + headerData.level * 50,
      });
      playCounter < 2 ? play(headerData.level + 1) : null;
    } else {
      setHeaderData({
        level: headerData.level == 1 ? 1 : headerData.level - 1,
        score: headerData.score == 0 ? 0 : headerData.score - 50,
      });
      playCounter < 2 ? play(headerData.level - 1) : null;
    }
  };
  const play = (level) => {
    
    setPlayCounter((prevState) => prevState + 1);
    setGameProps(thisGameUtils.getGameProps(level));
  };
  const afterCountDownEnd = () => {
    play(headerData.level);
  };
  useEffect(() => {
    getStoredDataObject("save").then((gamedata) => {
      gamedata
        ? null
        : setHeaderData({
            ...headerData,
            level: 2,
            score: 50,
          });
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SingleGameContainer
        setSounds={setSounds}
        sounds={sounds}
        afterCountDownEnd={afterCountDownEnd}
        headerProps={headerProps}
        // headerData={headerData}
        backgroundColor="#7366ff"
      >
        <Game gameProps={gameProps} sounds={sounds} next={next} />
      </SingleGameContainer>
    </View>
  );
};

export default index;
