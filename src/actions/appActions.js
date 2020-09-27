import { SET_LANG, SET_LOADING } from './types';

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



