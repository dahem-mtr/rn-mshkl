import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Game from "./Game";
import {gamesFile} from "../gamesFile";
import SingleGameContainer from "../../games-containers/SingleGameContainer";
import { useSelector, useDispatch } from "react-redux";
import { utils as thisGameUtils } from "./utils";
import { storeData, getStoredDataObject } from "../../../storage";
import { controllerActions } from "../../../actions/controllerActions";
import { render } from "react-dom";

const index = () => {
  const gameState = useSelector((state) => state.game);

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

  
  const play = (level) => {
    
    setPlayCounter((prevState) => prevState + 1);
    
    var playProps = thisGameUtils.getGameProps(level);
    dispatch(controllerActions.setPlayProps(playProps));
    
  };
  const afterCountDownEnd = () => {
    play(headerData.level);
  };


  useEffect(() => {
   if (gameState.playResult)

   if (gameState.playResult == "CORRECT") {
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
  }, [gameState.playResult]);
  
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
    const renderGame = ()=> {

       return gamesFile.map((game, i) => {
      if ( game.gameId == 1) {
      return <View  style={{ flex: 1 }} key={i} > 
        {game.game}
      </View>
      }
      });
    }
     
  return (
    <View style={{ flex: 1 }}>
      <SingleGameContainer
        afterCountDownEnd={afterCountDownEnd}
        headerProps={headerProps}
        backgroundColor={gameState.gameData.backgroundColor}
      >
        {/* <Game  /> */}
        {renderGame()}
      </SingleGameContainer>
    </View>
  );
};

export default index;
