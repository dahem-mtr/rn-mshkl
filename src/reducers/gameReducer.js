import { SET_GAME ,SET_PLAY_PROPS ,SET_PLAY_RESULT} from "../actions/types";

const initialState = {
    gameProps:null,
    playProps: null,
    playResult:null
}

export default appReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_GAME:
            return {
                ...state,
                gameProps: action.payload,
                playResult: null,
            };
        case SET_PLAY_PROPS:
            return {
                ...state,
                playProps: action.payload,
                playResult: null,
            };
       
            case SET_PLAY_RESULT:
                return {
                    ...state,
                    playResult: action.payload,
                    playProps: null,

                };
        
        default:
            return state;
    }
}