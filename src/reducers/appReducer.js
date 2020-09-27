import { SET_LANG, SET_LOADING } from "../actions/types";

const initialState = {
    isRTL: false,
    isDark: false,
    lang: "",
    isLoading: false,
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
        
        
        default:
            return state;
    }
}