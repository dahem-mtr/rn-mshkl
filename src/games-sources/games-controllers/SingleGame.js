import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { gamesFile } from "../games/gamesFile";
import SingleGameContainer from "../games-containers/SingleGameContainer";
import { useSelector, useDispatch } from "react-redux";
import { utils as thisGameUtils } from "../games/firstGame/utils";
import { utils  } from "../games-utils";
import { storeData, getStoredDataObject } from "../../storage";
import { gameActions } from "../../actions/gameActions";

const SingleGame = ({navigation}) => {
  const gameState = useSelector((state) => state.game);

  const [playCounter, setPlayCounter] = useState(0);
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [gameIsEnd, setGameIsEnd] = useState(false);
  const maximumNumberToPlay = 1;

  const dispatch = useDispatch();

  const [headerData, setHeaderData] = useState({});
  const [headerProps, setHeaderProps] = useState({
    level: null,
    score: null,
    maxLevel: 0,
    maxScore: 0,
  });



  const play = (level) => {
    

    var playProps = utils.getPlayProps(gameState.gameProps.id,level);
    dispatch(gameActions.setPlayProps(playProps));
    setPlayCounter((prevState) => prevState + 1);

  };
  const OnCountDownEnd = () => {
    play(headerProps.level);
  };



  
  useEffect(() => {

    if (gameState.playResult) {
      if (gameState.playResult == "CORRECT") {
        setNumberCorrect((prevState) => prevState + 1);


        setHeaderProps({
          level: headerProps.level + 1,
          score: headerProps.score + headerProps.level * 50,
        });
        playCounter < maximumNumberToPlay ? play(headerProps.level + 1) : setGameIsEnd(true);
      } else {
        setHeaderProps({
          level: headerProps.level == 1 ? 1 : headerProps.level - 1,
          score: headerProps.score == 0 ? 0 : headerProps.score - 50,
        });
        playCounter < maximumNumberToPlay ? play(headerProps.level - 1) : setGameIsEnd(true);
      }

    }
  }, [gameState.playResult]);

  useEffect(() => {
    getStoredDataObject("save").then((userData) => {
      userData
        ? null
        : setHeaderProps({
          ...headerProps,
          level: 1,
          score: 0,
          
        });
    });
  }, []);
  const renderGame = () => {

    return gamesFile.map((gameFile, i) => {
      if (gameFile.gameId == gameState.gameProps.id) {
        return <View style={{ flex: 1 }} key={i} >
          {gameFile.component}
        </View>
      }
    });
  }

  return (
    // <View style={{ flex: 1 }}>
      <SingleGameContainer
        OnCountDownEnd={OnCountDownEnd}
        headerProps={headerProps}
        gameIsEnd={gameIsEnd}
        numberCorrect={numberCorrect}
        navigation={navigation}
        backgroundColor={gameState.gameProps.backgroundColor}
      >
        {renderGame()}
      </SingleGameContainer>
    // </View>
  );
};

export default SingleGame;
