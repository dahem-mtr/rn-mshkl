import { SET_LANG, SET_LOADING, SET_SHOW_MIN_TAB, SET_SCREEN_IS_FADEING,SET_SHOW_GAME} from "../actions/types";

const initialState = {
    isRTL: false,
    isDark: false,
    lang: "",
    isLoading: false,
    showMinTab: true,
    screenIsFadeing: false,
    ShowGame: false
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

            case SET_SCREEN_IS_FADEING:

            return {
                ...state,
                screenIsFadeing: action.payload,
            };

            case SET_SHOW_GAME:

            return {
                ...state,
                showGame: action.payload,
            };
        
        
        
        default:
            return state;
    }
}