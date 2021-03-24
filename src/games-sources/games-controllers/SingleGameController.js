import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { gamesFile } from "../games/gamesFile";
import SingleGameContainer from "../games-containers/SingleGameContainer";
import { useSelector, useDispatch } from "react-redux";
import { utils as thisGameUtils } from "../games/firstGame/utils";
import { utils } from "../games-utils";
import { storeData, getStoredDataObject } from "../../storage";
import { controllerActions } from "../../actions/controllerActions";
import { set } from "react-native-reanimated";

const SingleGameController = ({ navigation }) => {
  const controller = useSelector((state) => state.controller);
  const app = useSelector((state) => state.app);
  const [playCounter, setPlayCounter] = useState(0);
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [gameIsEnd, setGameIsEnd] = useState(false);
  const [maximumNumberToPlay, setMaximumNumberToPlay] = useState(0);
  const [answers, setAnswers] = useState([]);

  const dispatch = useDispatch();

  const [headerData, setHeaderData] = useState({});
  const [headerProps, setHeaderProps] = useState({
    level: null,
    score: null,
    maxLevel: 0,
    maxScore: 0,
  });

  const play = (level) => {
    dispatch(controllerActions.setPlayProps({
      type:"singleGame",
      level:level,
      isPlay:true,
    }));
    setPlayCounter((prevState) => prevState + 1);
  };
  const OnCountDownEnd = () => {
    play(headerProps.level);
  };


const createAnswers = () => {
  let answers = [];
  for (var i = 0; i < controller.gameData.maximumNumberToPlay; i++) {
    answers = [...answers, null];
  }
  setAnswers(answers);
}

 
  useEffect(() => {
    if (controller.playResult) {
      if (controller.playResult == "CORRECT") {
        setNumberCorrect((prevState) => prevState + 1);

       var newAnswers = [...answers];
       newAnswers[playCounter-1]= true
        setAnswers([...newAnswers])
        setHeaderProps({
          level: headerProps.level + 1,
          score: headerProps.score + headerProps.level * 50,
        });
        playCounter < maximumNumberToPlay
          ? play(headerProps.level + 1)
          : setGameIsEnd(true);
      } else {
        var newAnswers = [...answers];
        newAnswers[playCounter-1]= false
        setAnswers(newAnswers)

        
        setHeaderProps({
          level: headerProps.level == 1 ? 1 : headerProps.level - 1,
          score: headerProps.score == 0 ? 0 : headerProps.score - 50,
        });
        playCounter < maximumNumberToPlay
          ? play(headerProps.level - 1)
          : setGameIsEnd(true);
      }
    }
  }, [controller.playResult]);

  useEffect(() => {
   
setMaximumNumberToPlay(controller.gameData.maximumNumberToPlay)  
createAnswers();  
    getStoredDataObject(controller.gameData.id.toString()).then((userData) => {
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
      if (gameFile.gameId == controller.gameData.id) {
        return (
          <View style={{ flex: 1 }} key={i}>
            {gameFile.component}
          </View>
        );
      }
    });
  };

  return (
    <SingleGameContainer
      app={app}
      OnCountDownEnd={OnCountDownEnd}
      headerProps={headerProps}
      gameIsEnd={gameIsEnd}
      numberCorrect={numberCorrect}
      navigation={navigation}
      answers={answers}
      backgroundColor={controller.gameData.backgroundColor}
    >
      {renderGame()}
    </SingleGameContainer>
  );
};

export default SingleGameController;
