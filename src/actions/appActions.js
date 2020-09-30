import { SET_LANG, SET_LOADING, SET_SHOW_MIN_TAB } from './types';

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

export const actions = {
    setLang,
    setLoading,
    setShowMInTab
};