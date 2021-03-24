import { SET_GAME ,SET_PLAY_PROPS ,SET_PLAY_RESULT} from "../actions/types";

const initialState = {
    gameData:null,
    playProps: {
        type:null,
        isPlay:false,
  
      },
    playResult:null
}

export default controllerReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_GAME:
            return {
                ...state,
                gameData: action.payload,
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
                    playProps: {
                        type:null,
                        isPlay:false},

                };
        
        default:
            return state;
    }
}