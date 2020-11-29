import { SET_GAME ,SET_PLAY_PROPS ,SET_PLAY_RESULT} from './types';


export const setGame = (data) => {
    return {
        type: SET_GAME,
        payload: data,
    };
};

export const setPlayProps = (data) => {
    return {
        type: SET_PLAY_PROPS,
        payload: data,
    };
};

export const setPlayResult = (data) => {
    return {
        type: SET_PLAY_RESULT,
        payload: data,
    };
};

export const gameActions = {
    setGame,
    setPlayProps,
    setPlayResult
};