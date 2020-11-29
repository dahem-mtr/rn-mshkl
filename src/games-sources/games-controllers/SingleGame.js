import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { gamesFile } from "../games/gamesFile";
import SingleGameContainer from "../games-containers/SingleGameContainer";
import { useSelector, useDispatch } from "react-redux";
import { utils as thisGameUtils } from "../games/firstGame/utils";
import { storeData, getStoredDataObject } from "../../storage";
import { gameActions } from "../../actions/gameActions";

const index = ({navigation}) => {
  const gameState = useSelector((state) => state.game);

  const [playCounter, setPlayCounter] = useState(0);
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const dispatch = useDispatch();

  const [headerData, setHeaderData] = useState({});
  const [headerProps, setHeaderProps] = useState({
    level: null,
    score: null,
    maxLevel: 0,
    maxScore: 0,
  });



  const play = (level) => {
    //  console.warn(playCounter)
    
    setPlayCounter((prevState) => prevState + 1);

    var playProps = thisGameUtils.getGameProps(level);
    dispatch(gameActions.setPlayProps(playProps));

  };
  const afterCountDownEnd = () => {
    play(headerProps.level);
  };

  const maximumNumberToPlay = 1;


  
  useEffect(() => {

    if (gameState.playResult) {
      if (gameState.playResult == "CORRECT") {
        setNumberCorrect((prevState) => prevState + 1);


        setHeaderProps({
          level: headerProps.level + 1,
          score: headerProps.score + headerProps.level * 50,
        });
        playCounter < maximumNumberToPlay ? play(headerProps.level + 1) : setIsEnd(true);
      } else {
        setHeaderProps({
          level: headerProps.level == 1 ? 1 : headerProps.level - 1,
          score: headerProps.score == 0 ? 0 : headerProps.score - 50,
        });
        playCounter < maximumNumberToPlay ? play(headerProps.level - 1) : setIsEnd(true);
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
      if (gameFile.gameId == gameState.props.id) {
        return <View style={{ flex: 1 }} key={i} >
          {gameFile.component}
        </View>
      }
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <SingleGameContainer
        afterCountDownEnd={afterCountDownEnd}
        headerProps={headerProps}
        isEnd={isEnd}
        numberCorrect={numberCorrect}
        navigation={navigation}
        backgroundColor={gameState.props.backgroundColor}
      >
        {renderGame()}
      </SingleGameContainer>
    </View>
  );
};

export default index;
