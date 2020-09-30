import { SET_LANG, SET_LOADING, SET_SHOW_MIN_TAB } from "../actions/types";

const initialState = {
    isRTL: false,
    isDark: false,
    lang: "",
    isLoading: false,
    showMinTab: true
}

export default appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LANG:

            return {
                ...state,
                isRTL: action.payload === "ar" ? true : false,
                lang: action.payload,
            };
        case SET_LOADING:

            return {
                ...state,
                isLoading: action.payload,
            };
        
        case SET_SHOW_MIN_TAB:

            return {
                ...state,
                showMinTab: action.payload,
            };
        
        
        default:
            return state;
    }
}