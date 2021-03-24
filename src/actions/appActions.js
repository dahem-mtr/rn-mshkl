import { SET_LANG, SET_LOADING, SET_SHOW_MIN_TAB, SET_SCREEN_IS_FADEING,SET_SHOW_GAME } from './types';

export const setLang = (data) => {
    return {
        type: SET_LANG,
        payload: data,
    };
};
export const setLoading = (data) => {
    return {
        type: SET_LOADING,
        payload: data,
    };
};

export const setShowMInTab = (data) => {
    return {
        type: SET_SHOW_MIN_TAB,
        payload: data,
    };
};

export const setScreenIsFadeing = (data) => {
    return {
        type: SET_SCREEN_IS_FADEING,
        payload: data,
    };
};
export const setShowGame = (data) => {
    return {
        type: SET_SHOW_GAME,
        payload: data,
    };
};

export const actions = {
    setLang,
    setLoading,
    setShowMInTab,
    setScreenIsFadeing,
    setShowGame
};